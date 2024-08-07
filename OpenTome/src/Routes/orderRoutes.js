// orderRoutes.js

const express = require('express');
const { createOrder, updatePaymentStatus, cancelOrder } = require('../Controllers/orderControllers');
const auth = require('../Middleware/authMiddleware');
const router = express.Router();

// Create a new order
router.post('/', auth, createOrder);

// Update payment status of an order
router.patch('/:orderId/pay', auth, updatePaymentStatus);

// Cancel an order
router.delete('/:orderId', auth, cancelOrder);

module.exports = router;
