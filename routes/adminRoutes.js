const express = require('express');
const { adminLogin, createAdmin } = require('../controllers/adminController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', adminLogin);

router.post('/create', createAdmin);

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
