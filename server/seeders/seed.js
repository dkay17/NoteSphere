const bcrypt = require('bcryptjs');
const { getDb } = require('../config/database');

const seedDatabase = async (db) => {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('The development seed cannot run in production');
  }

  const totals = await db.orm.public.User.aggregate((aggregate) => ({
    count: aggregate.count(),
  }));
  if (totals.count > 0) {
    throw new Error('Refusing to seed a non-empty database');
  }

  const institutions = [
    'University of Ghana',
    'KNUST',
    'University of Cape Coast',
    'GIMPA',
    'Ashesi University',
  ];
  const levels = ['Level 100', 'Level 200', 'Level 300', 'Level 400'];
  const passwordHash = await bcrypt.hash('password123', 10);
  const users = [];

  const admin = await db.orm.public.User.create({
    name: 'Admin User',
    email: 'admin@notesphere.com',
    password: await bcrypt.hash('admin123', 10),
    institution: 'NoteSphere HQ',
    level: 'Admin',
    role: 'admin',
    isPremium: true,
  });

  for (let index = 0; index < institutions.length; index += 1) {
    users.push(await db.orm.public.User.create({
      name: `Student ${index + 1}`,
      email: `student${index + 1}@example.com`,
      password: passwordHash,
      institution: institutions[index],
      level: levels[index % levels.length],
      isPremium: index < 2,
    }));
  }

  const courses = [
    ['Introduction to Computer Science', 'CS101'],
    ['Data Structures and Algorithms', 'CS201'],
    ['Database Management Systems', 'CS301'],
    ['Web Development', 'CS302'],
    ['Operating Systems', 'CS401'],
  ];

  for (let index = 0; index < courses.length; index += 1) {
    const user = users[index % users.length];
    const [course, courseCode] = courses[index];
    await db.orm.public.Note.create({
      title: `${course} - Lecture Notes`,
      course,
      courseCode,
      institution: user.institution,
      fileUrl: `uploads/notes/sample-${index + 1}.pdf`,
      fileName: `${courseCode}-notes.pdf`,
      fileSize: 0,
      fileType: '.pdf',
      uploaderId: user.id,
      tags: 'Lecture Notes',
      description: `Seed note for ${course}.`,
      verified: index % 2 === 0,
    });
  }

  console.log(`Created development seed data and admin account ${admin.email}.`);
  console.log('Development-only credentials: admin@notesphere.com / admin123');
  console.log('Development-only student password: password123');
};

(async () => {
  const db = await getDb();
  try {
    await seedDatabase(db);
  } finally {
    await db.close();
  }
})().catch((error) => {
  console.error('Seeding failed:', error);
  process.exitCode = 1;
});
