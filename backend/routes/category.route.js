const express = require('express');
const router = express.Router();

const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

const { validateCategory } = require('../middlewares/category.validator');

router
  .route('/categories')
  .get(getCategories)
  .post(createCategory, validateCategory('createCategory'));
router.route('/categories/:_id').put(updateCategory).delete(deleteCategory);

module.exports = router;
