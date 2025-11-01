const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const sequelize = new Sequelize(
  process.env.DB_NAME || 'notesphere_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Database connected successfully');
    
    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('✅ Database models synchronized');
  } catch (error) {
    console.error('❌ Unable to connect to database:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
