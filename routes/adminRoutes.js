const express = require('express');
const { adminLogin, createAdmin } = require('../controllers/adminController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Admin login route
router.post('/login', adminLogin);

// Create admin route (only run once to create the admin)
router.post('/create', createAdmin);

// A protected route example
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
