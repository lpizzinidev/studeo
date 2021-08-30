const mongoose = require("mongoose");

const Category = mongoose.model("category", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Category;
