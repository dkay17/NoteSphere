const { User, Note, DownloadLog } = require('../models');
const { Op } = require('sequelize');
const { sequelize } = require('../config/database');

// @desc    Get admin dashboard analytics
// @route   GET /api/admin/dashboard
// @access  Private/Admin
const getDashboard = async (req, res) => {
  try {
    // Total users
    const totalUsers = await User.count();
    const activeUsers = await User.count({ where: { isActive: true } });
    const premiumUsers = await User.count({ where: { isPremium: true } });

    // Total notes
    const totalNotes = await Note.count();
    const verifiedNotes = await Note.count({ where: { verified: true } });
    const pendingNotes = await Note.count({ where: { verified: false } });

    // Total downloads
    const totalDownloads = await DownloadLog.count();

    // Downloads this month
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const downloadsThisMonth = await DownloadLog.count({
      where: {
        downloadDate: {
          [Op.gte]: startOfMonth
        }
      }
    });

    // Top 5 most downloaded notes
    const topNotes = await Note.findAll({
      order: [['downloads', 'DESC']],
      limit: 5,
      include: [
        {
          association: 'uploader',
          attributes: ['name']
        }
      ]
    });

    // Top 5 institutions by note count
    const topInstitutions = await Note.findAll({
      attributes: [
        'institution',
        [sequelize.fn('COUNT', sequelize.col('id')), 'noteCount']
      ],
      group: ['institution'],
      order: [[sequelize.fn('COUNT', sequelize.col('id')), 'DESC']],
      limit: 5,
      raw: true
    });

    // Top 5 courses by note count
    const topCourses = await Note.findAll({
      attributes: [
        'course',
        [sequelize.fn('COUNT', sequelize.col('id')), 'noteCount']
      ],
      group: ['course'],
      order: [[sequelize.fn('COUNT', sequelize.col('id')), 'DESC']],
      limit: 5,
      raw: true
    });

    // Recent uploads (last 10)
    const recentUploads = await Note.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      include: [
        {
          association: 'uploader',
          attributes: ['name', 'email']
        }
      ]
    });

    // Monthly upload trend (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyUploads = await Note.findAll({
      attributes: [
        [sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%Y-%m'), 'month'],
        [sequelize.fn('COUNT', sequelize.col('id')), 'count']
      ],
      where: {
        createdAt: {
          [Op.gte]: sixMonthsAgo
        }
      },
      group: [sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%Y-%m')],
      order: [[sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%Y-%m'), 'ASC']],
      raw: true
    });

    res.json({
      stats: {
        totalUsers,
        activeUsers,
        premiumUsers,
        totalNotes,
        verifiedNotes,
        pendingNotes,
        totalDownloads,
        downloadsThisMonth
      },
      topNotes,
      topInstitutions,
      topCourses,
      recentUploads,
      monthlyUploads
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query;

    const where = {};
    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
        { institution: { [Op.like]: `%${search}%` } }
      ];
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await User.findAndCountAll({
      where,
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.json({
      users: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      totalUsers: count
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user status
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  try {
    const { isActive, isPremium, role, subscriptionExpiry } = req.body;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (isActive !== undefined) user.isActive = isActive;
    if (isPremium !== undefined) user.isPremium = isPremium;
    if (role !== undefined) user.role = role;
    if (subscriptionExpiry !== undefined) user.subscriptionExpiry = subscriptionExpiry;

    await user.save();

    res.json({
      message: 'User updated successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
        isPremium: user.isPremium,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Verify/unverify note
// @route   PUT /api/admin/notes/:id/verify
// @access  Private/Admin
const verifyNote = async (req, res) => {
  try {
    const { verified } = req.body;

    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    note.verified = verified;
    await note.save();

    res.json({
      message: `Note ${verified ? 'verified' : 'unverified'} successfully`,
      note
    });
  } catch (error) {
    console.error('Verify note error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prevent deleting admin accounts
    if (user.role === 'admin') {
      return res.status(403).json({ message: 'Cannot delete admin accounts' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getDashboard,
  getAllUsers,
  updateUser,
  verifyNote,
  deleteUser
};
