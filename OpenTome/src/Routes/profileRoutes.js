const express = require('express');
const router = express.Router();
const { updateProfile } = require('../Controllers/profileControllers'); // Adjust the path as needed
const auth = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizeRoleMiddleware');

// Route to update a user profile
router.put('/update/:id', auth, authorizeRole('admin'), updateProfile); // Ensure updateProfile is a valid function

module.exports = router;
