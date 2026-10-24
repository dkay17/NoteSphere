# Firebase and NoteSphere

NoteSphere currently uses PostgreSQL through the Prisma 8 contract runtime. Its relational data includes users, notes, and download logs; the Express API and both clients are built around this existing backend.

## Should this project switch to Firebase?

Firebase is not a drop-in database replacement. Firestore is a document database, so adopting it would require redesigning the data model and rewriting database access in the API. In particular, the current relational associations, PostgreSQL queries, transactions, and migration workflow would need Firebase-specific equivalents and testing.

Firebase Authentication and Cloud Storage could be evaluated independently, but adding either would also require changes to the corresponding authentication or upload/download flows. The current local upload directory is not persistent on serverless hosts; use durable object storage if deploying the API to Vercel.

For the active backend migration, continue using PostgreSQL and follow [DATABASE_SWITCH_GUIDE.md](./DATABASE_SWITCH_GUIDE.md). Do not use older instructions in this file that recommend Sequelize, MySQL, or PlanetScale; those describe the retired backend.
