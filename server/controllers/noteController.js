const path = require('path');
const fs = require('fs');
const { getDb } = require('../config/database');

const parseId = (value) => {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
};

const parsePage = (value, fallback, maximum) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0
    ? Math.min(parsed, maximum)
    : fallback;
};

const uploadNote = async (req, res) => {
  try {
    const { title, course, courseCode, lecturer, institution, tags, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }
    if (!title || !course || !institution) {
      return res.status(400).json({ message: 'Please provide title, course, and institution' });
    }

    const db = await getDb();
    const note = await db.orm.public.Note.create({
      title,
      course,
      courseCode: courseCode || null,
      lecturer: lecturer || null,
      institution,
      fileUrl: req.file.path,
      fileName: req.file.originalname,
      fileSize: req.file.size,
      fileType: path.extname(req.file.originalname).toLowerCase(),
      uploaderId: req.user.id,
      tags: tags || null,
      description: description || null,
    });

    return res.status(201).json({
      message: 'Note uploaded successfully',
      note: {
        id: note.id,
        title: note.title,
        course: note.course,
        institution: note.institution,
        fileName: note.fileName,
        verified: note.verified,
      },
    });
  } catch (error) {
    console.error('Upload note error:', error);
    return res.status(500).json({ message: 'Server error during upload' });
  }
};

const getNotes = async (req, res) => {
  try {
    const {
      search,
      institution,
      course,
      lecturer,
      tags,
      sortBy = 'createdAt',
      order = 'DESC',
    } = req.query;
    const page = parsePage(req.query.page, 1, Number.MAX_SAFE_INTEGER);
    const limit = parsePage(req.query.limit, 20, 100);
    const db = await getDb();
    let filtered = db.orm.public.Note;

    if (typeof search === 'string' && search.trim()) {
      const { or } = await import('@prisma/orm-postgres/orm-client');
      const term = `%${search.trim()}%`;
      filtered = filtered.where((note) =>
        or(
          note.title.ilike(term),
          note.course.ilike(term),
          note.courseCode.ilike(term),
          note.description.ilike(term),
        ),
      );
    }
    if (typeof institution === 'string' && institution) {
      filtered = filtered.where((note) => note.institution.ilike(`%${institution}%`));
    }
    if (typeof course === 'string' && course) {
      filtered = filtered.where((note) => note.course.ilike(`%${course}%`));
    }
    if (typeof lecturer === 'string' && lecturer) {
      filtered = filtered.where((note) => note.lecturer.ilike(`%${lecturer}%`));
    }
    if (typeof tags === 'string' && tags) {
      filtered = filtered.where((note) => note.tags.ilike(`%${tags}%`));
    }

    const allowedSorts = ['createdAt', 'downloads', 'rating'];
    const safeSort = allowedSorts.includes(sortBy) ? sortBy : 'createdAt';
    const direction = String(order).toLowerCase() === 'asc' ? 'asc' : 'desc';
    const total = await filtered.aggregate((aggregate) => ({
      count: aggregate.count(),
    }));
    const notes = await filtered
      .include('uploader', (uploader) => uploader.select('id', 'name', 'institution'))
      .orderBy((note) => note[safeSort][direction]())
      .limit(limit)
      .offset((page - 1) * limit)
      .all();

    return res.json({
      notes,
      totalPages: Math.ceil(total.count / limit),
      currentPage: page,
      totalNotes: total.count,
    });
  } catch (error) {
    console.error('Get notes error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getNoteById = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }

    const db = await getDb();
    const note = await db.orm.public.Note
      .where({ id })
      .include('uploader', (uploader) =>
        uploader.select('id', 'name', 'institution', 'level'),
      )
      .first();

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    return res.json(note);
  } catch (error) {
    console.error('Get note error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const downloadNote = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }

    const db = await getDb();
    const outcome = await db.transaction(async (tx) => {
      const user = await tx.orm.public.User
        .where({ id: req.user.id })
        .select('id', 'role', 'isPremium', 'weeklyDownloads', 'lastDownloadReset')
        .first();
      if (!user) {
        return { kind: 'user-missing' };
      }

      const lastReset = new Date(user.lastDownloadReset.toString());
      const resetDue = Date.now() - lastReset.getTime() >= 7 * 24 * 60 * 60 * 1000;
      let weeklyDownloads = resetDue ? 0 : user.weeklyDownloads;
      if (resetDue) {
        await tx.orm.public.User.where({ id: user.id }).update({
          weeklyDownloads: 0,
          lastDownloadReset: Temporal.Instant.from(new Date().toISOString()),
        });
      }

      const isFreeUser = !user.isPremium && user.role !== 'admin';
      if (isFreeUser && weeklyDownloads >= 3) {
        return { kind: 'limit-reached' };
      }

      const note = await tx.orm.public.Note.where({ id }).first();
      if (!note) {
        return { kind: 'note-missing' };
      }
      if (!fs.existsSync(note.fileUrl)) {
        return { kind: 'file-missing' };
      }

      await tx.orm.public.Note.where({ id }).update({
        downloads: note.downloads + 1,
      });
      await tx.orm.public.DownloadLog.create({
        userId: user.id,
        noteId: note.id,
        ipAddress: req.ip || null,
      });
      if (isFreeUser) {
        weeklyDownloads += 1;
        await tx.orm.public.User.where({ id: user.id }).update({ weeklyDownloads });
      }

      return { kind: 'ready', fileUrl: note.fileUrl, fileName: note.fileName };
    });

    if (outcome.kind === 'user-missing') {
      return res.status(401).json({ message: 'User not found' });
    }
    if (outcome.kind === 'limit-reached') {
      return res.status(403).json({
        message: 'Weekly download limit reached. Upgrade to premium for unlimited downloads.',
        limitReached: true,
      });
    }
    if (outcome.kind === 'note-missing') {
      return res.status(404).json({ message: 'Note not found' });
    }
    if (outcome.kind === 'file-missing') {
      return res.status(404).json({ message: 'File not found on server' });
    }

    return res.download(outcome.fileUrl, outcome.fileName);
  } catch (error) {
    console.error('Download note error:', error);
    return res.status(500).json({ message: 'Server error during download' });
  }
};

const getMyNotes = async (req, res) => {
  try {
    const db = await getDb();
    const notes = await db.orm.public.Note
      .where({ uploaderId: req.user.id })
      .orderBy((note) => note.createdAt.desc())
      .all();
    return res.json(notes);
  } catch (error) {
    console.error('Get my notes error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }

    const db = await getDb();
    const note = await db.orm.public.Note.where({ id }).first();
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    if (note.uploaderId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this note' });
    }

    await db.orm.public.Note.where({ id }).delete();
    if (fs.existsSync(note.fileUrl)) {
      fs.unlinkSync(note.fileUrl);
    }
    return res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Delete note error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const generateSummary = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }

    const db = await getDb();
    const note = await db.orm.public.Note.where({ id }).first();
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const summary = `This is a comprehensive summary of ${note.title} for ${note.course}.
    The document covers key concepts and important topics relevant to ${note.institution} students. 
    Main topics include: fundamental principles, practical applications, and exam preparation materials.`;
    await db.orm.public.Note.where({ id }).update({ summary });
    return res.json({ message: 'Summary generated successfully', summary });
  } catch (error) {
    console.error('Generate summary error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  uploadNote,
  getNotes,
  getNoteById,
  downloadNote,
  getMyNotes,
  deleteNote,
  generateSummary,
};
