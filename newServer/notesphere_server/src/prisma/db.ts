import postgresServerless from "@prisma/orm-postgres/serverless";

import "temporal-polyfill/global";

import { contract } from "./contract.ts";

export const postgres = postgresServerless({ contract });

export type Database = Awaited<ReturnType<typeof postgres.connect>>;

export async function withDatabase<T>(
  operation: (database: Database) => Promise<T>,
): Promise<T> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL must be configured");
  }

  await using database = await postgres.connect({ url });
  return await operation(database);
}
