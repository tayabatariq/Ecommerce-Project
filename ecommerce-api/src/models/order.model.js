const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  orderItems:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderitem",
  }],
  orderDate: {
    type: Date,
    required: true,
    default:Date.now()
  },
  deliveryDate: {
    type: Date,
   

  },
  shipingAdress: {
    type: mongoose.Schema.Types.ObjectId,
ref:"adrsses",
    required: true,

  },
  paymentdetails: {
    paymentmethod:{
        type:String
    },
    transactionID:{
        type:String
    },
    paymentID:{
        type:String
    },
    paymentStatus:{
        type:String,
        default:"PENDING"
    }

  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalDiscountPrice:{
    type: Number,
    required: true,
  },
  orderStatus:{
    type: String,
    required: true,
    default:"PENDING"

  },
  totalItem:{
    type: Number,
    required: true,
  },
  ceratedAt:{
    type:Date,
    default:Date.now()
  }


});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
