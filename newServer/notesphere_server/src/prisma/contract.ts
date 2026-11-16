
import { defineContract, now } from '@prisma/orm-postgres/contract-builder';

export const contract = defineContract({}, ({ field, model, rel, gen, type }) => {
  // USER MODEL
  const User = model('User', {
    fields: {
      id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
      name: field.column(type.String()),
      email: field.column(type.String()).unique(),
      password: field.column(type.String()),
      institution: field.column(type.String()),
      level: field.column(type.String()),
      role: field.column(type.String()).default('student'),
      isPremium: field.column(type.Boolean()).default(false),
      subscriptionExpiry: field.column(type.DateTime()).optional(),
      bio: field.column(type.String()).optional(),
      isActive: field.column(type.Boolean()).default(true),
      weeklyDownloads: field.column(type.Int()).default(0),
      lastDownloadReset: field.column(type.DateTime()).default(now()).onCreate(gen.now()),
      createdAt: field.column(type.DateTime()).default(now()).onCreate(gen.now()),
      updatedAt: field.column(type.temporal.UpdatedAt()),
    },
  });

  // NOTE MODEL
  const Note = model('Note', {
    fields: {
      id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
      title: field.column(type.String()),
      course: field.column(type.String()),
      courseCode: field.column(type.String()).optional(),
      lecturer: field.column(type.String()).optional(),
      institution: field.column(type.String()),
      fileUrl: field.column(type.String()).optional(),
      fileData: field.column(type.Bytes()).optional(),
      fileName: field.column(type.String()),
      fileSize: field.column(type.Int()),
      fileType: field.column(type.String()),
      uploaderId: field.column(type.Uuid()),
      tags: field.column(type.String()).optional(),
      description: field.column(type.String()).optional(),
      summary: field.column(type.String()).optional(),
      downloads: field.column(type.Int()).default(0),
      verified: field.column(type.Boolean()).default(false),
      rating: field.column(type.Float()).default(0),
      ratingCount: field.column(type.Int()).default(0),
      createdAt: field.column(type.DateTime()).default(now()).onCreate(gen.now()),
      updatedAt: field.column(type.temporal.UpdatedAt()),
    },
  });

  // DOWNLOAD LOG MODEL
  const DownloadLog = model('DownloadLog', {
    fields: {
      id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
      userId: field.column(type.Uuid()),
      noteId: field.column(type.Uuid()),
      downloadDate: field.column(type.DateTime()).default(now()).onCreate(gen.now()),
      ipAddress: field.column(type.String()).optional(),
      createdAt: field.column(type.DateTime()).default(now()).onCreate(gen.now()),
      updatedAt: field.column(type.temporal.UpdatedAt()),
    },
  });

  return {
    models: {
      User: User.relations({
        notes: rel.hasMany(Note, { by: 'uploaderId' }),
        downloadLogs: rel.hasMany(DownloadLog, { by: 'userId' }),
      }).sql(({ cols, constraints }) => ({
        table: 'Users',
        indexes: [
          constraints.index([cols.institution]),
          constraints.index([cols.role]),
        ],
      })),

      Note: Note.relations({
        uploader: rel.belongsTo(User, {
          from: 'uploaderId',
          to: 'id',
        }).sql({
          fk: { onDelete: 'cascade' },
        }),

        downloadLogs: rel.hasMany(DownloadLog, { by: 'noteId' }),
      }).sql(({ cols, constraints }) => ({
        table: 'Notes',
        indexes: [
          constraints.index([cols.institution]),
          constraints.index([cols.uploaderId]),
          constraints.index([cols.createdAt]),
        ],
      })),

      DownloadLog: DownloadLog.relations({
        user: rel.belongsTo(User, {
          from: 'userId',
          to: 'id',
        }).sql({
          fk: { onDelete: 'cascade' },
        }),

        note: rel.belongsTo(Note, {
          from: 'noteId',
          to: 'id',
        }).sql({
          fk: { onDelete: 'cascade' },
        }),
      }).sql(({ cols, constraints }) => ({
        table: 'DownloadLogs',
        indexes: [
          constraints.index([cols.userId]),
          constraints.index([cols.noteId]),
          constraints.index([cols.downloadDate]),
        ],
      })),
    },
  };
});
