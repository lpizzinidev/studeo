const express = require('express');
const router = express.Router();

const {
  getResourcesList,
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resource.controller');

const { validate } = require('../middlewares/validator.middleware');

router.route('/resources/:category').get(getResourcesList);
router
  .route('/resources/:category')
  .post(createResource, validate('createResource'));
router
  .route('/resources/:category/:_id')
  .get(getResource)
  .put(updateResource)
  .delete(deleteResource);

module.exports = router;
