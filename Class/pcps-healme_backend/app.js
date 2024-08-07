const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/Routes/authRoute");
const profileRoutes = require("./src/Routes/ProfileRoutes");
const categoryRoutes = require("./src/Routes/categoryRoute");
const productRoutes = require("./src/Routes/productRoutes");
const app = express();
const cors = require('cors');

const port = 5000;
connectDB();

app.use(express.json());
app.use(cors());

// Debug log
console.log('Setting up routes');

app.use("/api/auth", authRoutes);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/profile", profileRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
