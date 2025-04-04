const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "Customer",
  },
  mobile: {
    type: String,
  },
  adress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adrsses",
    },
  ],
  paymentInfo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "paymentInfo",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
const User=mongoose.model("user",userSchema)


module.exports=User;