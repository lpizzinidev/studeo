const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: false,
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

categorySchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('category', categorySchema);
