const express = require('express');
const router = express.Router();

const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

const { validate } = require('../middlewares/category.validator');

router
  .route('/categories')
  .get(getCategories)
  .post(createCategory, validate('createCategory'));
router.route('/categories/:_id').put(updateCategory).delete(deleteCategory);

module.exports = router;
