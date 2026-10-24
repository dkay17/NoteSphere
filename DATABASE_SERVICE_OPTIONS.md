# PostgreSQL hosting for NoteSphere

NoteSphere's backend is moving from Sequelize/MySQL to Prisma ORM 8/PostgreSQL. Vercel no longer offers its former built-in Postgres product; new Vercel projects connect to a database provider through the Vercel Marketplace. Neon is one available Postgres integration.

## Configure the provider URLs

Use the provider's pooled connection string as `DATABASE_URL` for the running API. Use its direct/unpooled URL as `DIRECT_URL` for Prisma schema management and the MySQL-to-PostgreSQL data importer. Map the provider's environment-variable names to these project names in Vercel or the backend host.

Keep both URLs private. Do not commit them or use the pooled runtime URL for schema changes if the provider supplies a direct URL.

## Move the existing database

1. Back up the MySQL database and note-upload files.
2. Configure `MYSQL_DATABASE_URL` locally for the source database.
3. Initialize the empty PostgreSQL schema with `npm run db:init`.
4. Run `npm run data:import:mysql` to review source/destination row counts.
5. Run `npm run data:import:mysql -- --apply` only after confirming the backups. The importer refuses to write if the target tables already contain rows and does not modify MySQL.
6. Verify the imported data and app flows before changing production traffic.

See [DATABASE_SWITCH_GUIDE.md](./DATABASE_SWITCH_GUIDE.md) for complete setup and validation instructions.

## Uploaded documents

Postgres stores note metadata, not the actual PDF/DOC/DOCX bytes. The current API saves those files to its local `server/uploads` directory. Vercel serverless filesystems are not durable storage; move files to object storage such as Vercel Blob and update the upload/download endpoints before hosting the API on Vercel.

## Prisma status

The repository uses Prisma ORM 8's Postgres contract runtime, which is currently a release candidate. Its API is different from the standard `PrismaClient` API and it currently targets PostgreSQL, SQLite, and MongoDB rather than MySQL. Keep the generated contract files in sync by running `npm run contract:emit` after editing `src/prisma/contract.prisma`.
