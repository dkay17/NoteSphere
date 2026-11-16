import { withDatabase } from "./db.ts";

export async function listUsers(limit = 10) {
  const safeLimit = Number.isSafeInteger(limit) && limit > 0 ? Math.min(limit, 100) : 10;

  return await withDatabase(async (database) => {
    const users = await database.orm.public.User
      .select("id", "email", "name", "createdAt")
      .limit(safeLimit)
      .all();

    return users.map((user) => ({
      id: String(user.id),
      email: user.email,
      name: user.name,
      createdAt: user.createdAt?.toISOString() ?? null,
    }));
  });
}

export type StarterUser = Awaited<ReturnType<typeof listUsers>>[number];
