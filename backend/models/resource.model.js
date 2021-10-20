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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
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
