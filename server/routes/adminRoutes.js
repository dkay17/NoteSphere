const express = require('express');
const router = express.Router();
const {
  getDashboard,
  getAllUsers,
  updateUser,
  verifyNote,
  deleteUser
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

// All routes require admin access
router.use(protect);
router.use(adminOnly);

router.get('/dashboard', getDashboard);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.put('/notes/:id/verify', verifyNote);

module.exports = router;
