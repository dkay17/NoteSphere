const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('../config/database');

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be configured');
  }

  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const register = async (req, res) => {
  try {
    const { name, email, password, institution, level } = req.body;

    if (!name || !email || !password || !institution || !level) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET must be configured');
    }

    const db = await getDb();
    const existingUser = await db.orm.public.User.where({ email }).select('id').first();
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }

    const user = await db.orm.public.User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      institution,
      level,
      role: 'student',
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      institution: user.institution,
      level: user.level,
      role: user.role,
      isPremium: user.isPremium,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error('Register error:', error);
    if (error?.sqlState === '23505') {
      return res.status(409).json({ message: 'User already exists with this email' });
    }
    return res.status(500).json({ message: 'Server error during registration' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const db = await getDb();
    const user = await db.orm.public.User
      .where({ email })
      .select(
        'id',
        'name',
        'email',
        'password',
        'institution',
        'level',
        'role',
        'isPremium',
        'subscriptionExpiry',
        'bio',
        'isActive',
        'weeklyDownloads',
        'lastDownloadReset',
      )
      .first();

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    if (!user.isActive) {
      return res.status(401).json({ message: 'Account is deactivated. Contact admin.' });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const lastReset = new Date(user.lastDownloadReset.toString());
    if (Date.now() - lastReset.getTime() >= 7 * 24 * 60 * 60 * 1000) {
      await db.orm.public.User.where({ id: user.id }).update({
        weeklyDownloads: 0,
        lastDownloadReset: Temporal.Instant.from(new Date().toISOString()),
      });
      user.weeklyDownloads = 0;
    }

    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      institution: user.institution,
      level: user.level,
      role: user.role,
      isPremium: user.isPremium,
      subscriptionExpiry: user.subscriptionExpiry,
      bio: user.bio,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login' });
  }
};

const getMe = async (req, res) => {
  try {
    const db = await getDb();
    const user = await db.orm.public.User
      .where({ id: req.user.id })
      .select(
        'id',
        'name',
        'email',
        'institution',
        'level',
        'role',
        'isPremium',
        'subscriptionExpiry',
        'bio',
        'isActive',
        'weeklyDownloads',
        'lastDownloadReset',
        'createdAt',
        'updatedAt',
      )
      .include('notes', (notes) =>
        notes.select('id', 'title', 'course', 'downloads', 'verified', 'createdAt'),
      )
      .first();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, institution, level, bio } = req.body;
    const update = {};
    if (name !== undefined) update.name = name;
    if (institution !== undefined) update.institution = institution;
    if (level !== undefined) update.level = level;
    if (bio !== undefined) update.bio = bio;
    if (Object.keys(update).length === 0) {
      return res.status(400).json({ message: 'No profile fields provided to update' });
    }

    const db = await getDb();
    const user = await db.orm.public.User
      .where({ id: req.user.id })
      .select('id', 'name', 'email', 'institution', 'level', 'bio', 'isPremium')
      .update(update);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error('Update profile error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login, getMe, updateProfile };
