const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Category = mongoose.model('category', {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: ObjectId,
    required: true,
    ref: 'users',
  },
  resources: [
    {
      type: ObjectId,
      ref: 'resources',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Category;
