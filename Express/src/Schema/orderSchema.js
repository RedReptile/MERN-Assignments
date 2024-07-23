const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
