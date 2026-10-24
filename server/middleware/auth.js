const jwt = require('jsonwebtoken');
const { getDb } = require('../config/database');

const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  if (!process.env.JWT_SECRET) {
    return next(new Error('JWT_SECRET must be configured'));
  }

  let decoded;
  try {
    decoded = jwt.verify(authorization.slice('Bearer '.length), process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }

  if (typeof decoded !== 'object' || decoded === null || !Number.isSafeInteger(decoded.id)) {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }

  const db = await getDb();
  const user = await db.orm.public.User
    .where({ id: decoded.id })
    .select('id', 'name', 'email', 'role', 'isPremium', 'isActive', 'weeklyDownloads', 'lastDownloadReset')
    .first();

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  if (!user.isActive) {
    return res.status(401).json({ message: 'Account is deactivated' });
  }

  req.user = user;
  return next();
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Access denied. Admin only.' });
};

const premiumOnly = (req, res, next) => {
  if (req.user && (req.user.isPremium || req.user.role === 'admin')) {
    return next();
  }
  return res.status(403).json({ message: 'Premium subscription required' });
};

module.exports = { protect, adminOnly, premiumOnly };
