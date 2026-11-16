import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

let dbPromise;

const getDb = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set to connect to PostgreSQL');
  }

  if (!dbPromise) {
    dbPromise = import('temporal-polyfill/full/global')
      .then(() => import('../../src/prisma/db.ts'))
      .then(({ db }) => db);
  }

  return dbPromise;
};

const connectDB = async () => {
  const db = await getDb();
  await db.orm.public.User.select('id').limit(1).all();
  console.log('✅ PostgreSQL database connected successfully');
  return db;
};

export { getDb, connectDB };
