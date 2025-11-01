const { sequelize } = require('../config/database');
const { User, Note } = require('../models');

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Sync models (this will create tables)
    await sequelize.sync({ force: true });
    console.log('✅ Database tables created');

    // Create admin user (password will be hashed by User model hook)
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@notesphere.com',
      password: 'admin123',
      institution: 'NoteSphere HQ',
      level: 'Admin',
      role: 'admin',
      isPremium: true,
      isActive: true
    });
    console.log('✅ Admin user created');

    // Create test users
    const users = [];
    const institutions = ['University of Ghana', 'KNUST', 'University of Cape Coast', 'GIMPA', 'Ashesi University'];
    const levels = ['Level 100', 'Level 200', 'Level 300', 'Level 400'];

    for (let i = 1; i <= 5; i++) {
      const user = await User.create({
        name: `Student ${i}`,
        email: `student${i}@example.com`,
        password: 'password123',
        institution: institutions[i - 1],
        level: levels[Math.floor(Math.random() * levels.length)],
        role: 'student',
        isPremium: i <= 2, // First 2 users are premium
        isActive: true
      });
      users.push(user);
    }
    console.log('✅ Test users created');

    // Create test notes
    const courses = [
      { name: 'Introduction to Computer Science', code: 'CS101' },
      { name: 'Data Structures and Algorithms', code: 'CS201' },
      { name: 'Database Management Systems', code: 'CS301' },
      { name: 'Web Development', code: 'CS302' },
      { name: 'Operating Systems', code: 'CS401' },
      { name: 'Software Engineering', code: 'CS402' },
      { name: 'Calculus I', code: 'MATH101' },
      { name: 'Linear Algebra', code: 'MATH201' },
      { name: 'Microeconomics', code: 'ECON101' },
      { name: 'Business Statistics', code: 'STAT201' }
    ];

    const lecturers = ['Dr. Mensah', 'Prof. Agyeman', 'Dr. Osei', 'Prof. Asante', 'Dr. Boateng'];
    const tagsList = ['Lecture Notes', 'Past Questions', 'Summary', 'Assignment', 'Midsem', 'Finals'];

    for (let i = 0; i < 10; i++) {
      const course = courses[i];
      const uploader = users[Math.floor(Math.random() * users.length)];
      
      await Note.create({
        title: `${course.name} - Lecture Notes`,
        course: course.name,
        courseCode: course.code,
        lecturer: lecturers[Math.floor(Math.random() * lecturers.length)],
        institution: uploader.institution,
        fileUrl: `uploads/notes/sample-${i + 1}.pdf`,
        fileName: `${course.code}-notes.pdf`,
        fileSize: Math.floor(Math.random() * 5000000) + 500000,
        fileType: '.pdf',
        uploaderId: uploader.id,
        tags: tagsList.slice(0, Math.floor(Math.random() * 3) + 1).join(', '),
        description: `Comprehensive notes for ${course.name}. Covers all topics from the syllabus.`,
        downloads: Math.floor(Math.random() * 100),
        verified: Math.random() > 0.3,
        rating: (Math.random() * 2 + 3).toFixed(1),
        ratingCount: Math.floor(Math.random() * 20) + 5
      });
    }
    console.log('✅ Test notes created');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📝 Test Credentials:');
    console.log('Admin: admin@notesphere.com / admin123');
    console.log('Student 1 (Premium): student1@example.com / password123');
    console.log('Student 2 (Premium): student2@example.com / password123');
    console.log('Student 3-5 (Free): student3-5@example.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
