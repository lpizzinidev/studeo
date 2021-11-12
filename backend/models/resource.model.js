const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  link: {
    type: String,
    required: true,
    unique: false,
  },
  author: {
    type: String,
    required: true,
    default: '',
  },
  duration: {
    type: String,
    required: true,
    default: '',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: false,
    ref: 'user',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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

resourceSchema.index({ user: 1, name: 1, link: 1 }, { unique: true });

module.exports = mongoose.model('resource', resourceSchema);
