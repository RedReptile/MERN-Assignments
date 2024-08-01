const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Category description is required"],
  },
  dosage: {
    type: String,
    required: [true, "Dosage information is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  prescription: {
    type: Boolean,
    required: [true, "Prescription status is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
