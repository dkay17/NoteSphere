const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  institution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'e.g., Level 100, Level 200'
  },
  role: {
    type: DataTypes.ENUM('student', 'admin', 'guest'),
    defaultValue: 'student'
  },
  isPremium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  subscriptionExpiry: {
    type: DataTypes.DATE,
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  weeklyDownloads: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: 'Track downloads per week for free users'
  },
  lastDownloadReset: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

// Instance method to compare password
User.prototype.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to check if subscription is active
User.prototype.isSubscriptionActive = function() {
  if (!this.isPremium) return false;
  if (!this.subscriptionExpiry) return false;
  return new Date() < new Date(this.subscriptionExpiry);
};

// Method to reset weekly downloads
User.prototype.resetWeeklyDownloads = function() {
  const now = new Date();
  const lastReset = new Date(this.lastDownloadReset);
  const daysDiff = (now - lastReset) / (1000 * 60 * 60 * 24);
  
  if (daysDiff >= 7) {
    this.weeklyDownloads = 0;
    this.lastDownloadReset = now;
    return this.save();
  }
};

module.exports = User;
