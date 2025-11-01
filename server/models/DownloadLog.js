const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const DownloadLog = sequelize.define('DownloadLog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  noteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Notes',
      key: 'id'
    }
  },
  downloadDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = DownloadLog;
