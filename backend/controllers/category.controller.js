const Category = require("../models/category.model");

const getCategories = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Error fetching categories" });
  }
};

const createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(200).json({ message: "Category created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating category" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { _id } = req.params;
    await Category.updateOne({ _id }, req.body);
    res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error updating category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.params;
    await Category.deleteOne({ _id });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting category" });
  }
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
