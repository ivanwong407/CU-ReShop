// models/productModel.js

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productID:{
    type: String,
    required: true
  },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;