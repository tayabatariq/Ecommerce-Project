const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountprice: {
    type: Number,
    required: true,
  },
  discountpersent: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  brand: {
    type: String,
  },
  size:[
{
    name:{type:String},
    quantity:{type:Number}
}
  ],
  imageUrl:{
    type:String
  },
  reviews:[
    {type:mongoose.Schema.Types.ObjectId,
        ref:"ratings",
    },

    
  ],
  reviews:[
    
        {type:mongoose.Schema.Types.ObjectId,
            ref:"reviews",
        },
  ],
  numRating:{
    type:Number,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
            ref:"categories",

  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
