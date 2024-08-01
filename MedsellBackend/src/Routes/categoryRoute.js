const express = require('express');
const auth = require("../Middleware/authMiddleware");
const authorizeRole = require("../Middleware/authorizationMiddleware");
const categoryController = require("../Controllers/categoryControllers");
const router = express.Router();

// route to create user

/**
 * @description To get all categories
 * @api /api/category/create
 * @access PUBLIC
 * @type POST
 * @return response
 */

// Route to create a category
router.post("/create", auth, authorizeRole('admin'), categoryController.addCategory);

// Route to update a category
router.put("/:id", auth, authorizeRole('admin'), categoryController.updateCategory);


module.exports = router;