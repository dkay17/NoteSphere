import {
  createHmac,
  randomBytes,
  scrypt,
  timingSafeEqual,
} from "node:crypto";
import type { Database } from "../../../prisma/db.ts";
import { ApiError, parseUuid } from "./http.ts";

const PASSWORD_COST = 16_384;
const PASSWORD_BLOCK_SIZE = 8;
const PASSWORD_PARALLELISM = 1;
const PASSWORD_KEY_LENGTH = 64;
const TOKEN_LIFETIME_SECONDS = 30 * 24 * 60 * 60;
const dummyPasswordHash = [
  "scrypt",
  PASSWORD_COST,
  PASSWORD_BLOCK_SIZE,
  PASSWORD_PARALLELISM,
  Buffer.alloc(16).toString("base64url"),
  Buffer.alloc(PASSWORD_KEY_LENGTH).toString("base64url"),
].join("$");

type TokenClaims = {
  id: string;
  iat: number;
  exp: number;
};

export type AuthenticatedUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  isPremium: boolean;
  isActive: boolean;
  weeklyDownloads: number;
  lastDownloadReset: Date;
};

function jwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret || Buffer.byteLength(secret) < 32) {
    throw new ApiError(500, "JWT_SECRET must be set to at least 32 characters");
  }
  return secret;
}

function derivePasswordKey(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scrypt(
      password,
      salt,
      PASSWORD_KEY_LENGTH,
      {
        N: PASSWORD_COST,
        r: PASSWORD_BLOCK_SIZE,
        p: PASSWORD_PARALLELISM,
        maxmem: 64 * 1024 * 1024,
      },
      (error, key) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(key);
      },
    );
  });
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await derivePasswordKey(password, salt);
  return [
    "scrypt",
    PASSWORD_COST,
    PASSWORD_BLOCK_SIZE,
    PASSWORD_PARALLELISM,
    salt.toString("base64url"),
    key.toString("base64url"),
  ].join("$");
}

export async function verifyPassword(
  password: string,
  encoded: string,
): Promise<boolean> {
  const parts = encoded.split("$");
  if (
    parts.length !== 6 ||
    parts[0] !== "scrypt" ||
    parts[1] !== String(PASSWORD_COST) ||
    parts[2] !== String(PASSWORD_BLOCK_SIZE) ||
    parts[3] !== String(PASSWORD_PARALLELISM)
  ) {
    await derivePasswordKey(password, Buffer.alloc(16));
    return false;
  }

  let salt: Buffer;
  let expected: Buffer;
  try {
    salt = Buffer.from(parts[4], "base64url");
    expected = Buffer.from(parts[5], "base64url");
  } catch {
    await derivePasswordKey(password, Buffer.alloc(16));
    return false;
  }

  if (salt.length !== 16 || expected.length !== PASSWORD_KEY_LENGTH) {
    await derivePasswordKey(password, Buffer.alloc(16));
    return false;
  }

  const actual = await derivePasswordKey(password, salt);
  return timingSafeEqual(actual, expected);
}

export function createToken(id: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(
    JSON.stringify({ alg: "HS256", typ: "JWT" }),
  ).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({ id, iat: now, exp: now + TOKEN_LIFETIME_SECONDS }),
  ).toString("base64url");
  const signingInput = `${header}.${payload}`;
  const signature = createHmac("sha256", jwtSecret())
    .update(signingInput)
    .digest("base64url");

  return `${signingInput}.${signature}`;
}

function readToken(token: string): TokenClaims {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new ApiError(401, "Not authorized, token failed");
  }

  let header: unknown;
  let claims: unknown;
  let actualSignature: Buffer;
  try {
    header = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
    actualSignature = Buffer.from(parts[2], "base64url");
  } catch {
    throw new ApiError(401, "Not authorized, token failed");
  }

  if (
    typeof header !== "object" ||
    header === null ||
    !("alg" in header) ||
    header.alg !== "HS256"
  ) {
    throw new ApiError(401, "Not authorized, token failed");
  }

  const expectedSignature = createHmac("sha256", jwtSecret())
    .update(`${parts[0]}.${parts[1]}`)
    .digest();
  if (
    actualSignature.length !== expectedSignature.length ||
    !timingSafeEqual(actualSignature, expectedSignature)
  ) {
    throw new ApiError(401, "Not authorized, token failed");
  }

  if (
    typeof claims !== "object" ||
    claims === null ||
    !("id" in claims) ||
    !("iat" in claims) ||
    !("exp" in claims) ||
    typeof claims.id !== "string" ||
    typeof claims.iat !== "number" ||
    typeof claims.exp !== "number" ||
    claims.exp <= Math.floor(Date.now() / 1000) ||
    !parseUuid(claims.id)
  ) {
    throw new ApiError(401, "Not authorized, token failed");
  }

  return { id: claims.id, iat: claims.iat, exp: claims.exp };
}

export async function requireUser(
  request: Request,
  database: Database,
): Promise<AuthenticatedUser> {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    throw new ApiError(401, "Not authorized, no token");
  }

  const claims = readToken(authorization.slice("Bearer ".length).trim());
  const user = await database.orm.public.User
    .where({ id: claims.id })
    .select(
      "id",
      "name",
      "email",
      "role",
      "isPremium",
      "isActive",
      "weeklyDownloads",
      "lastDownloadReset",
    )
    .first();

  if (!user) {
    throw new ApiError(401, "User not found");
  }
  if (!user.isActive) {
    throw new ApiError(401, "Account is deactivated");
  }
  return user;
}

export function requireAdmin(user: AuthenticatedUser): void {
  if (user.role !== "admin") {
    throw new ApiError(403, "Access denied. Admin only.");
  }
}

export function requirePremium(user: AuthenticatedUser): void {
  if (!user.isPremium && user.role !== "admin") {
    throw new ApiError(403, "Premium subscription required");
  }
}

export async function verifyLoginPassword(
  password: string,
  storedHash: string | undefined,
): Promise<boolean> {
  return await verifyPassword(password, storedHash ?? dummyPasswordHash);
}
