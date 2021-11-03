const express = require('express');
const router = express.Router();

const {
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resource.controller');

const { validate } = require('../middlewares/validator.middleware');

router
  .route('/resources/:category')
  .post(validate('createResource'), createResource);
router
  .route('/resources/:_id')
  .put(validate('createResource'), updateResource)
  .delete(deleteResource);

module.exports = router;
