const Resource = require("../models/resource.model");

const getResources = (req, res) => {
  try {
    const data = await Resource.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Error fetching resources" });
  }
};

const createResource = (req, res) => {
  try {
    await Resource.create(req.body);
    res.status(200).json({ message: "Resource created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating resource" });
  }
};

const updateResource = (req, res) => {
  try {
    const { _id } = req.params;
    await Resource.updateOne({ _id }, req.body);
    res.status(200).json({ message: "Resource updated successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error updating resource" });
  }
};

const deleteResource = (req, res) => {
  try {
    const { _id } = req.params;
    await Resource.deleteOne({ _id });
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting resource" });
  }
};

module.exports = {
  getResources,
  createResource,
  updateResource,
  deleteResource,
};
