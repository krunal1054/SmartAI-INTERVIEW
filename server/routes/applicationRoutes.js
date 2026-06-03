const express = require("express");

const router = express.Router();

const {

  applyJob,

  getMyApplications,

} = require(
  "../controllers/applicationController"
);

const {

  protect,

} = require(
  "../middleware/authMiddleware"
);

const upload =
  require(
    "../middleware/uploadMiddleware"
  );




// APPLY
router.post(

  "/apply",

  protect,

  upload.single("resume"),

  applyJob
);




// GET APPLICATIONS
router.get(

  "/my-applications",

  protect,

  getMyApplications
);




module.exports = router;