const express = require('express');
const productController = require('../Controllers/productControllers');
const auth = require('../Middleware/authMiddleware');
const { productImage } = require('../Middleware/uploadMiddleware');
const router = express.Router();

/**
 * @description To add a new product
 * @api /api/products/add
 * @access PRIVATE
 * @type POST
 * @return response
 */
router.post('/add', auth, productImage.single('image'), productController.addProduct);

/**
 * @description To partially update a product
 * @api /api/products/update/:id
 * @access PRIVATE
 * @type PATCH
 * @return response
 */
router.patch('/update/:id', auth, productImage.single('image'), productController.updateProductPartial);

/**
 * @description To update a product
 * @api /api/products/update/:id
 * @access PRIVATE
 * @type PUT
 * @return response
 */
router.put('/update/:id', auth, productImage.single('image'), productController.updateProduct);

/**
 * @description To get all products
 * @api /api/products
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get('/', productController.getProducts);

/**
 * @description To get a single product by ID
 * @api /api/products/:id
 * @access PUBLIC
 * @type GET
 * @return response
 */
router.get('/:id', productController.getProduct);

/**
 * @description To delete a product
 * @api /api/products/:id
 * @access PRIVATE
 * @type DELETE
 * @return response
 */
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
