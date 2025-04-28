const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  cartItems: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cartitems",
    required: false,
  },
  totalPrice: {
    type: Number,
    required: true,
    default:0
  },
  totalItem: {
    type: Number,
    required: true,
    default:0

  },
  totalDiscountprice: {
    type: Number,
    required: true,
    default:0

  },
  discount: {
    type: Number,
    required: true,
    default:0

  }
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
