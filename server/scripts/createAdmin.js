const { sequelize } = require('../config/database');
const { User } = require('../models');
require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const createAdmin = async () => {
  try {
    // Get arguments from command line
    const args = process.argv.slice(2);
    
    if (args.length < 4) {
      console.log('\n📝 Usage: node createAdmin.js <name> <email> <password> <institution>');
      console.log('Example: node createAdmin.js "John Doe" john@example.com password123 "University of Ghana"\n');
      process.exit(1);
    }

    const [name, email, password, institution] = args;

    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log(`\n⚠️  User with email ${email} already exists.`);
      console.log(`Current role: ${existingUser.role}`);
      
      // Ask if they want to update to admin (in a real scenario, you'd want input)
      // For now, let's just update it
      existingUser.role = 'admin';
      existingUser.isPremium = true;
      existingUser.isActive = true;
      await existingUser.save();
      
      console.log('✅ User updated to admin successfully!\n');
      console.log('📝 Admin Credentials:');
      console.log(`Email: ${email}`);
      console.log(`Password: ${password} (or existing password)`);
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name,
      email,
      password,
      institution,
      level: 'Admin',
      role: 'admin',
      isPremium: true,
      isActive: true
    });

    console.log('\n✅ Admin user created successfully!\n');
    console.log('📝 Admin Credentials:');
    console.log(`Name: ${admin.name}`);
    console.log(`Email: ${admin.email}`);
    console.log(`Password: ${password}`);
    console.log(`Institution: ${admin.institution}\n`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();

