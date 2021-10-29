const { validationResult } = require('express-validator');

const Resource = require('../models/resource.model');
const Category = require('../models/category.model');

const getCategories = async (req, res) => {
  try {
    const { _id } = req.user;
    const data = await Category.find({ user: _id }).sort('name').exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories' });
  }
};

const getCategory = async (req, res) => {
  try {
    const { _id } = req.params;
    const category = await Category.findById(_id).populate('resources').exec();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category' + err });
  }
};

const createCategory = async (req, res) => {
  try {
    const { _id } = req.user;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newCategory = await Category.create({
      user: _id,
      ...req.body,
    });

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Error creating category' });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { _id } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedCategory = await Category.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: 'Error updating category' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.params;
    await Category.deleteOne({ _id });
    await Resource.deleteMany({ category: _id });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category' });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
