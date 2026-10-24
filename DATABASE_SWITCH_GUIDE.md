# Sequelize/MySQL to Prisma 8/PostgreSQL

The Express API now uses the Prisma 8 Postgres contract in `src/prisma/contract.prisma`. Prisma 8 is currently a release candidate and uses the contract runtime (`db.orm...`), not the standard Prisma Client API. The existing REST routes remain in place so the web and mobile apps do not need an API rewrite.

## Vercel and PostgreSQL

Vercel no longer offers its former built-in Postgres product. Create a Postgres database through the Vercel Marketplace (for example, Neon), then configure:

- `DATABASE_URL`: the provider's pooled URL for the running API.
- `DIRECT_URL`: the provider's direct/unpooled URL for schema changes and one-time data import.
- `JWT_SECRET`: a long, private signing secret.

Add these as environment variables in the backend's deployment environment. Do not commit `.env` or paste connection strings into source files. Copy `.env.example` for local setup.

## Prepare the new PostgreSQL schema

1. Back up the MySQL database and the files under `server/uploads`.
2. Configure `DIRECT_URL` for the new, empty PostgreSQL database.
3. Install dependencies from the repository root and the server folder:

   ```sh
   npm install
   cd server
   npm install
   cd ..
   ```

4. Emit the contract types and runtime metadata:

   ```sh
   npm run contract:emit
   ```

5. Initialize the new PostgreSQL schema:

   ```sh
   npm run db:init
   ```

The generated `src/prisma/contract.json` and `src/prisma/contract.d.ts` are emitted files. Edit the `.prisma` contract, then re-run `npm run contract:emit`; do not edit the generated files directly. Schema initialization and migration commands use `DIRECT_URL` when it is set.

## Import existing MySQL rows

The importer reads the existing Sequelize tables (`Users`, `Notes`, and `DownloadLogs`) and copies their IDs, passwords (already hashed), timestamps, and other columns into the mapped PostgreSQL tables. It does not alter or delete source data, and it refuses to write unless all three destination tables are empty.

Set `MYSQL_DATABASE_URL` in `.env` to the legacy MySQL source. Alternatively, provide the old `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`, and optional `MYSQL_PORT` values. Keep `DATABASE_URL` and `DIRECT_URL` pointed to PostgreSQL.

First inspect the counts without writing:

```sh
npm run data:import:mysql
```

After confirming both database backups and the displayed counts, perform the import:

```sh
npm run data:import:mysql -- --apply
```

The import runs in a PostgreSQL transaction, verifies row counts, and updates serial sequences so new records continue after the imported IDs. If any insert or verification fails, it rolls back the target transaction.

## Files are separate from database records

The database importer copies note metadata and each `fileUrl`, but not the actual PDF/DOC/DOCX files. The current upload handler stores files on the backend filesystem at `server/uploads/notes`; that storage is not part of Postgres and is not durable on Vercel's serverless filesystem. Before moving the API to Vercel, move the existing files and update upload/download handling to use persistent object storage such as Vercel Blob. If the API stays on a host with persistent disk, migrate the files to that host and update the stored paths.

## Deployment and checks

- Keep the source MySQL database and its backup until the PostgreSQL row counts, login, note browsing, uploads, downloads, and admin dashboard have been checked.
- Set `DATABASE_URL`, `DIRECT_URL`, and `JWT_SECRET` in every environment where the API or Prisma CLI runs.
- Do not run a schema-altering command against a shared database until the migration plan has been reviewed. Use Prisma 8's `migration plan` and `db migrate` workflow for reviewed schema changes; `db update` is intended for local development.
- The API checks PostgreSQL connectivity before it starts and does not synchronize or alter the schema at server startup.
- Development seeding is guarded against production and refuses to seed a non-empty database.
