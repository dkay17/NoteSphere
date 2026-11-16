# notesphere_server

Next.js API app for NoteSphere (Prisma 8). Designed to run as **Vercel serverless** functions via `src/app/api/[[...path]]/route.ts`.

## Vercel env vars

Set these in the Vercel project:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | At least 32 characters |
| `CLIENT_URL` | Frontend origin(s), comma-separated (e.g. `http://localhost:3000,https://your-frontend.vercel.app`) |

## Deploy on Vercel

1. Import `newServer/notesphere_server` as a Vercel project (or set Root Directory to that folder).
2. Add the env vars above.
3. Deploy. `vercel.json` already uses Next.js + `contract:emit` on build.

API base for the CRA client:

```text
https://<your-vercel-app>.vercel.app/api
```

Health check: `GET /api/health`

## Local API smoke test (optional)

If you need to hit the same route handlers locally (not required for Vercel):

```bash
npm install
npm run contract:emit
npm run dev
```

`npm run dev` requires `DATABASE_URL`. Prefer Composer local mode with:

```bash
npm run dev:composer
```

## Prisma

- Contract: `src/prisma/contract.ts`
- Config: `prisma.config.ts`
- Composer entry: `module.ts` + `service.ts`

After contract changes:

```bash
npm run contract:emit
```

If migration status reports `MIGRATION.MARKER_NOT_IN_HISTORY`, either:

- `npx prisma db sign` when the live DB already matches the contract, or
- `npx prisma db update` to push the current contract
