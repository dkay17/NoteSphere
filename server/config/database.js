const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

let dbPromise;

const getDb = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set to connect to PostgreSQL');
  }

  if (!dbPromise) {
    dbPromise = import('../../src/prisma/db.ts').then(({ db }) => db);
  }

  return dbPromise;
};

const connectDB = async () => {
  const db = await getDb();
  await db.orm.public.User.select('id').limit(1).all();
  console.log('✅ PostgreSQL database connected successfully');
  return db;
};

module.exports = { getDb, connectDB };
