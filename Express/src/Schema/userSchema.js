const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Buyer', 'Seller'], default: 'Buyer' },
    addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
