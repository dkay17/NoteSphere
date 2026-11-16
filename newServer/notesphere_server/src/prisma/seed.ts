import { withDatabase } from "./db.ts";

type SeedUser = {
  email: string;
  name: string;
  password: string;
  institution: string;
  level: string;
  role?: string;
};

export async function seed(users: SeedUser[]): Promise<void> {
  await withDatabase(async (database) => {
    for (const user of users) {
      await database.orm.public.User.upsert({
        create: user,
        update: {},
        conflictOn: { email: user.email },
      });
    }
  });
}
