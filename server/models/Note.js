const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lecturer: {
    type: DataTypes.STRING,
    allowNull: true
  },
  institution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Local file path'
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fileSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'File size in bytes'
  },
  fileType: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'PDF or DOCX'
  },
  uploaderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Comma-separated tags'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'AI-generated summary'
  },
  downloads: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: 'Admin verification status'
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5
    }
  },
  ratingCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true
});

// Method to increment downloads
Note.prototype.incrementDownloads = function() {
  this.downloads += 1;
  return this.save();
};

// Method to update rating
Note.prototype.updateRating = function(newRating) {
  const totalRating = (this.rating * this.ratingCount) + newRating;
  this.ratingCount += 1;
  this.rating = totalRating / this.ratingCount;
  return this.save();
};

module.exports = Note;
