const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { connectDB } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
// Allow requests from web client, mobile app, and local network
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:3000',
  'http://localhost:3000',
  /^http:\/\/192\.168\.\d+\.\d+:\d+$/, // Mobile devices on local network
  /^http:\/\/10\.\d+\.\d+\.\d+:\d+$/,  // Some local network IPs
  /^http:\/\/172\.\d+\.\d+\.\d+:\d+$/, // Docker/local network IPs
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    
    // Check if origin matches any allowed pattern
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return origin === allowedOrigin;
      } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      // Still allow for mobile apps (they might not send origin)
      callback(null, true);
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'NoteSphere API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File size too large. Maximum 10MB allowed.' });
    }
    return res.status(400).json({ message: err.message });
  }
  
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
