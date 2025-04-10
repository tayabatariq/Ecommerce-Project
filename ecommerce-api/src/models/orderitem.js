const mongoose = require("mongoose");

const orderitemSchema = new mongoose.Schema({
  
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

const OrderItem = mongoose.model("orderitem", orderitemSchema);

module.exports = OrderItem;
