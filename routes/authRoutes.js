// routes/authRoutes.js
const express = require('express');
const {
  signup,
  login,
  getMe,
  logout
} = require('../controllers/authController');

const router = express.Router();

// Import middleware
const { protect } = require('../middleware/auth');

// Register routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);

module.exports = router;