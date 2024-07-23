const express = require('express');
const mongoose = require('mongoose');
const User = require('./src/Schema/userSchema');
const Book = require('./src/Schema/bookSchema');
const Order = require('./src/Schema/orderSchema');


const app = express();
app.use(express.json());


// User Routes
app.post('/users', async (req, res) => {
    console.log('Received request to create user with body:', req.body);
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json({ id: savedUser._id, ...savedUser.toObject() });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
});


// Book Routes
app.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Order Routes
app.post('/orders', async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = app;
