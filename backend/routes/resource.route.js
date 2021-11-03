const express = require('express');
const router = express.Router();

const {
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resource.controller');

const { validate } = require('../middlewares/validator.middleware');

router
  .route('/resources/:category')
  .post(validate('createResource'), createResource);
router
  .route('/resources/:category/:_id')
  .get(getResource)
  .put(validate('createResource'), updateResource);
router.route('/resources/:_id').delete(deleteResource);

module.exports = router;
