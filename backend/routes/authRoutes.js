const express = require('express');
const router = express.Router();

// Import the controller functions
const { register, login } = require('../controllers/authController');

// POST route for registration
router.post('/register', register);

// POST route for login
router.post('/login', login);

module.exports = router;
