const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlenght: 50,
    required: true,
  },
  parentcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  lavel: {
    type: Number,
    required: true,
  }

});

const Category = mongoose.model("type:mongoose.Schema.Types.ObjectId,
            ref:"reviews",", categorySchema);

module.exports = Category;
