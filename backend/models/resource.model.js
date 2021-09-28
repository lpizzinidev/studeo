const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Resource = mongoose.model('resource', {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 0,
  },
  user: {
    type: ObjectId,
    required: true,
    ref: 'users',
  },
  category: {
    type: ObjectId,
    ref: 'categories',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
  },
});

module.exports = Resource;
