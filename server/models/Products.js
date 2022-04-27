const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
