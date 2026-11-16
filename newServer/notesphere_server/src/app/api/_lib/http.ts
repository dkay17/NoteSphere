export class ApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

function addCors(request: Request, response: Response): Response {
  const headers = new Headers(response.headers);
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    ...(process.env.CLIENT_URL ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  ]);

  headers.set("Vary", "Origin");
  if (origin && allowedOrigins.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Credentials", "true");
  }
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  headers.set(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type, Accept",
  );
  headers.set("Access-Control-Expose-Headers", "Content-Disposition");
  headers.set("Access-Control-Max-Age", "86400");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export async function handleApi(
  request: Request,
  action: () => Promise<Response>,
): Promise<Response> {
  try {
    return addCors(request, await action());
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    if (status >= 500) {
      console.error("API request failed:", error);
    }

    const message =
      error instanceof ApiError ? error.message : "Internal server error";
    return addCors(
      request,
      Response.json({ message }, { status }),
    );
  }
}

export function optionsResponse(request: Request): Response {
  return addCors(request, new Response(null, { status: 204 }));
}

export async function readJson(request: Request): Promise<Record<string, unknown>> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 1024 * 1024) {
    throw new ApiError(413, "Request body is too large");
  }

  let value: unknown;
  try {
    value = await request.json();
  } catch {
    throw new ApiError(400, "Invalid JSON body");
  }

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new ApiError(400, "Request body must be a JSON object");
  }
  return value as Record<string, unknown>;
}

export function parseUuid(value: string | undefined): string | null {
  return value && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
    ? value
    : null;
}

export function parsePage(
  value: string | null,
  fallback: number,
  maximum: number,
): number {
  if (!value || !/^\d+$/.test(value)) return fallback;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0
    ? Math.min(parsed, maximum)
    : fallback;
}

export function stringField(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : null;
}

export function stringOrNull(value: unknown): string | null {
  if (value === undefined || value === null) return null;
  return typeof value === "string" ? value.trim() || null : null;
}

export function downloadResponse(
  data: Uint8Array,
  fileName: string,
  mimeType: string,
): Response {
  const safeName = fileName.replace(/[\r\n"\\/]/g, "_");
  const asciiName = safeName.replace(/[^\x20-\x7e]/g, "_");
  const body = new Uint8Array(data.byteLength);
  body.set(data);

  return new Response(body.buffer, {
    headers: {
      "Content-Type": mimeType,
      "Content-Length": String(body.byteLength),
      "Content-Disposition": `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(safeName)}`,
      "Cache-Control": "private, no-store",
    },
  });
}
