const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50, // ✅ spelling fixed
    required: true,
  },
  parentcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // ✅ should match model name you define below
  },
  level: {           // ✅ spelling fixed from "lavel" to "level"
    type: Number,
    required: true,
  }
});

const Category = mongoose.model("Category", categorySchema); // ✅ model name + schema only

module.exports = Category;
