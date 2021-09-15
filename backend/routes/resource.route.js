const express = require("express");
const router = express.Router();

const {
  getResourcesList,
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require("../controllers/resource.controller");

router.route("/resources").get(getResourcesList).post(createResource);
router
  .route("/resources/:_id")
  .get(getResource)
  .put(updateResource)
  .delete(deleteResource);

module.exports = router;
