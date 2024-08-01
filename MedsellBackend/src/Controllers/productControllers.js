const Product = require('../Models/productModel');
const mongoose = require('mongoose');

// Controller to add a new product
const addProduct = async (req, res) => {
  try {
    const { name, price, manufacturer, expiryDate, batchNumber, category } = req.body;
    const image = req.file ? req.file.path : null;

    // Ensure category is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const newProduct = new Product({
      name,
      price,
      manufacturer,
      expiryDate,
      batchNumber,
      category,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', err });
  }
};

// Controller to update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, manufacturer, expiryDate, batchNumber, category } = req.body;
    const image = req.file ? req.file.path : undefined;

    // Ensure category is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        manufacturer,
        expiryDate,
        batchNumber,
        category,
        image,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating product', err });
  }
};

// Controller to partially update a product
const updateProductPartial = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const image = req.file ? req.file.path : undefined;

    // Add image path to updateData if provided
    if (image) {
      updateData.image = image;
    }

    // Ensure category is a valid ObjectId if provided
    if (updateData.category && !mongoose.Types.ObjectId.isValid(updateData.category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating product', err });
  }
};

// Controller to get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', err });
  }
};

// Controller to get a single product by ID
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', err });
  }
};

// Controller to delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', err });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  updateProductPartial,
  getProducts,
  getProduct,
  deleteProduct,
};
