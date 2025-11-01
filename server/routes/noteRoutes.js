const express = require('express');
const router = express.Router();
const {
  uploadNote,
  getNotes,
  getNoteById,
  downloadNote,
  getMyNotes,
  deleteNote,
  generateSummary
} = require('../controllers/noteController');
const { protect, premiumOnly } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/upload', protect, upload.single('file'), uploadNote);
router.get('/', getNotes);
router.get('/my-notes', protect, getMyNotes);
router.get('/:id', getNoteById);
router.get('/download/:id', protect, downloadNote);
router.delete('/:id', protect, deleteNote);
router.post('/:id/summary', protect, premiumOnly, generateSummary);

module.exports = router;
