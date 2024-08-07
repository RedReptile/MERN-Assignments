
const express = require('express');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const profileRoutes = require('./Routes/profileRoutes');
const orderRoutes = require('./Routes/orderRoutes'); 
const cors = require('cors');
require('dotenv').config();

const app = express(); 
const port = process.env.PORT || 4000;

connectDB();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

