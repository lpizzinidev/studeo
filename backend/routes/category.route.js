const express = require('express');
const router = express.Router();

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

const { validate } = require('../middlewares/validator.middleware');

router
  .route('/categories')
  .get(getCategories)
  .post(validate('createCategory'), createCategory);
router
  .route('/categories/:_id')
  .get(getCategory)
  .put(validate('createCategory'), updateCategory)
  .delete(deleteCategory);

module.exports = router;
