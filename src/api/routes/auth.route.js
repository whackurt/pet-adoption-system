const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Signup a new adopter
router.post('/signup', authController.signupAdopter);

// Login for adopter
router.post('/login', authController.loginAdopter);

// Login for admin (Sample route, adjust as per admin authentication method)
router.post('/admin/login', authController.loginAdmin);

module.exports = router;
