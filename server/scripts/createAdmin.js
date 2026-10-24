const bcrypt = require('bcryptjs');
const { getDb } = require('../config/database');

const createAdmin = async (db) => {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Run create-admin only in a non-production environment');
  }

  const [name, email, password, institution] = process.argv.slice(2);
  if (!name || !email || !password || !institution) {
    throw new Error(
      'Usage: npm run create-admin -- "Name" email password "Institution"',
    );
  }
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be configured');
  }

  const existingUser = await db.orm.public.User.where({ email }).first();
  if (existingUser) {
    await db.orm.public.User.where({ id: existingUser.id }).update({
      role: 'admin',
      isPremium: true,
      isActive: true,
    });
    console.log('Existing account promoted to admin.');
    return;
  }

  const admin = await db.orm.public.User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    institution,
    level: 'Admin',
    role: 'admin',
    isPremium: true,
    isActive: true,
  });
  console.log(`Admin account created: ${admin.email}`);
};

(async () => {
  const db = await getDb();
  try {
    await createAdmin(db);
  } finally {
    await db.close();
  }
})()
  .catch((error) => {
    console.error('Unable to create admin:', error);
    process.exitCode = 1;
  });
