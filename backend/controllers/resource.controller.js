const { validationResult } = require('express-validator');

const Category = require('../models/category.model');
const Resource = require('../models/resource.model');

const getResource = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Resource.findById(_id);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resource' });
  }
};

const createResource = async (req, res) => {
  try {
    const { _id } = req.user;
    const { category } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newResource = await Resource.create({
      user: _id,
      category,
      ...req.body,
    });

    // Aggiungo risorsa a categoria
    await Category.findByIdAndUpdate(
      category,
      { $push: { resources: newResource._id } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json(newResource);
  } catch (err) {
    res.status(500).json({ message: 'Error creating resource' });
  }
};

const updateResource = async (req, res) => {
  try {
    const { _id, category } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedResource = await Resource.findByIdAndUpdate(
      _id,
      {
        category,
        ...req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedResource);
  } catch (err) {
    res.status(500).json({ message: 'Error updating resource' });
  }
};

const deleteResource = async (req, res) => {
  try {
    const { _id } = req.params;
    await Resource.deleteOne({ _id });
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting resource' });
  }
};

module.exports = {
  getResource,
  createResource,
  updateResource,
  deleteResource,
};
