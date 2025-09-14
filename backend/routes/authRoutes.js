const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

// Auth routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', protect, authController.getMe);

// Example admin-only route
router.get('/admin-panel', protect, admin, (req, res) => {
  res.json({ message: 'Welcome to admin panel' });
});

module.exports = router;
