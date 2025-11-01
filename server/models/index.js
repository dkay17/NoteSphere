const User = require('./User');
const Note = require('./Note');
const DownloadLog = require('./DownloadLog');

// Define associations
User.hasMany(Note, { foreignKey: 'uploaderId', as: 'notes' });
Note.belongsTo(User, { foreignKey: 'uploaderId', as: 'uploader' });

User.hasMany(DownloadLog, { foreignKey: 'userId', as: 'downloads' });
DownloadLog.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Note.hasMany(DownloadLog, { foreignKey: 'noteId', as: 'downloadLogs' });
DownloadLog.belongsTo(Note, { foreignKey: 'noteId', as: 'note' });

module.exports = {
  User,
  Note,
  DownloadLog
};
