const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { name, email, password, institution, level } = req.body;

    // Validation
    if (!name || !email || !password || !institution || !level) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if user exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      institution,
      level,
      role: 'student'
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        institution: user.institution,
        level: user.level,
        role: user.role,
        isPremium: user.isPremium,
        token: generateToken(user.id)
      });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if account is active
    if (!user.isActive) {
      return res.status(401).json({ message: 'Account is deactivated. Contact admin.' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Reset weekly downloads if needed
    await user.resetWeeklyDownloads();

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      institution: user.institution,
      level: user.level,
      role: user.role,
      isPremium: user.isPremium,
      subscriptionExpiry: user.subscriptionExpiry,
      bio: user.bio,
      token: generateToken(user.id)
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          association: 'notes',
          attributes: ['id', 'title', 'course', 'downloads', 'verified', 'createdAt']
        }
      ]
    });

    res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const { name, institution, level, bio } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (name) user.name = name;
    if (institution) user.institution = institution;
    if (level) user.level = level;
    if (bio !== undefined) user.bio = bio;

    await user.save();

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      institution: user.institution,
      level: user.level,
      bio: user.bio,
      isPremium: user.isPremium
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  register,
  login,
  getMe,
  updateProfile
};
