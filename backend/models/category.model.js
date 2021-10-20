const mongoose = require('mongoose');

const Category = mongoose.model('category', {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'resource',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Category;
