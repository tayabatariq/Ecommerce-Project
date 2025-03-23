const mongoose = require("mongoose");

const cartitemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default:1

  },
  price: {
    type: Number,
    required: true,

  },
  discountprice: {
    type: Number,
    required: true,

  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

});

const CartItem = mongoose.model("cartitems", cartitemSchema);

module.exports = CartItem;
