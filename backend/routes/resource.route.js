const express = require("express");
const router = express.Router();

const {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} = require("../controllers/resource.controller");

router.route("/resources").get(getResources).post(createResource);
router.route("/resources/:_id").put(updateResource).delete(deleteResource);

module.exports = router;
