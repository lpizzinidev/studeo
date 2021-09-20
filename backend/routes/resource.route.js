const express = require("express");
const router = express.Router();

const {
  getResourcesList,
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require("../controllers/resource.controller");

router.route("/resources").post(createResource);
router.route("/resources/:category").get(getResourcesList);
router
  .route("/resources/:_id")
  .get(getResource)
  .put(updateResource)
  .delete(deleteResource);

module.exports = router;
