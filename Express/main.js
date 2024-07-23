require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Database');
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

connectDB();

app.listen(4000, () => {
    console.log('Server running on port 3000');
});
