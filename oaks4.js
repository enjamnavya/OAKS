const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },   // Product title (String, required)
    price: { type: Number, required: true },   // Product price (Number, required)
    category: { type: String, required: true }, // Product category (String, required)
    inStock: { type: Boolean, default: true }   // Availability (Boolean, default is true)
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;