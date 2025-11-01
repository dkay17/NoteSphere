const { Note, User, DownloadLog } = require('../models');
const { Op } = require('sequelize');
const path = require('path');
const fs = require('fs');

// @desc    Upload new note
// @route   POST /api/notes/upload
// @access  Private
const uploadNote = async (req, res) => {
  try {
    const { title, course, courseCode, lecturer, institution, tags, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    if (!title || !course || !institution) {
      return res.status(400).json({ message: 'Please provide title, course, and institution' });
    }

    // Create note
    const note = await Note.create({
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
      description: description || null
    });

    res.status(201).json({
      message: 'Note uploaded successfully',
      note: {
        id: note.id,
        title: note.title,
        course: note.course,
        institution: note.institution,
        fileName: note.fileName,
        verified: note.verified
      }
    });
  } catch (error) {
    console.error('Upload note error:', error);
    res.status(500).json({ message: 'Server error during upload' });
  }
};

// @desc    Get all notes with filters
// @route   GET /api/notes
// @access  Public
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
      page = 1,
      limit = 20
    } = req.query;

    const where = {};

    // Search filter
    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { course: { [Op.like]: `%${search}%` } },
        { courseCode: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    // Institution filter
    if (institution) {
      where.institution = { [Op.like]: `%${institution}%` };
    }

    // Course filter
    if (course) {
      where.course = { [Op.like]: `%${course}%` };
    }

    // Lecturer filter
    if (lecturer) {
      where.lecturer = { [Op.like]: `%${lecturer}%` };
    }

    // Tags filter
    if (tags) {
      where.tags = { [Op.like]: `%${tags}%` };
    }

    // Pagination
    const offset = (page - 1) * limit;

    // Sorting options
    let orderClause = [[sortBy, order]];
    if (sortBy === 'downloads') {
      orderClause = [['downloads', 'DESC']];
    } else if (sortBy === 'rating') {
      orderClause = [['rating', 'DESC']];
    }

    const { count, rows } = await Note.findAndCountAll({
      where,
      include: [
        {
          association: 'uploader',
          attributes: ['id', 'name', 'institution']
        }
      ],
      order: orderClause,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.json({
      notes: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      totalNotes: count
    });
  } catch (error) {
    console.error('Get notes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single note by ID
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id, {
      include: [
        {
          association: 'uploader',
          attributes: ['id', 'name', 'institution', 'level']
        }
      ]
    });

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    console.error('Get note error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Download note
// @route   GET /api/notes/download/:id
// @access  Private
const downloadNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check download limits for free users
    if (!req.user.isPremium && req.user.role !== 'admin') {
      await req.user.resetWeeklyDownloads();
      
      if (req.user.weeklyDownloads >= 3) {
        return res.status(403).json({ 
          message: 'Weekly download limit reached. Upgrade to premium for unlimited downloads.',
          limitReached: true
        });
      }
    }

    // Check if file exists
    if (!fs.existsSync(note.fileUrl)) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    // Increment downloads
    await note.incrementDownloads();

    // Log download
    await DownloadLog.create({
      userId: req.user.id,
      noteId: note.id,
      ipAddress: req.ip
    });

    // Increment user's weekly downloads
    if (!req.user.isPremium && req.user.role !== 'admin') {
      req.user.weeklyDownloads += 1;
      await req.user.save();
    }

    // Send file
    res.download(note.fileUrl, note.fileName);
  } catch (error) {
    console.error('Download note error:', error);
    res.status(500).json({ message: 'Server error during download' });
  }
};

// @desc    Get user's uploaded notes
// @route   GET /api/notes/my-notes
// @access  Private
const getMyNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({
      where: { uploaderId: req.user.id },
      order: [['createdAt', 'DESC']]
    });

    res.json(notes);
  } catch (error) {
    console.error('Get my notes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private (Owner or Admin)
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check ownership or admin
    if (note.uploaderId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this note' });
    }

    // Delete file from filesystem
    if (fs.existsSync(note.fileUrl)) {
      fs.unlinkSync(note.fileUrl);
    }

    await note.destroy();

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Delete note error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Generate AI summary (placeholder)
// @route   POST /api/notes/:id/summary
// @access  Private (Premium)
const generateSummary = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Mock AI summary generation
    const mockSummary = `This is a comprehensive summary of ${note.title} for ${note.course}. 
    The document covers key concepts and important topics relevant to ${note.institution} students. 
    Main topics include: fundamental principles, practical applications, and exam preparation materials.`;

    note.summary = mockSummary;
    await note.save();

    res.json({
      message: 'Summary generated successfully',
      summary: mockSummary
    });
  } catch (error) {
    console.error('Generate summary error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  uploadNote,
  getNotes,
  getNoteById,
  downloadNote,
  getMyNotes,
  deleteNote,
  generateSummary
};
