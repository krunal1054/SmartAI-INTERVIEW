/*const express = require("express");

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




// APPLY JOB
router.post(

  "/apply",

  protect,

  upload.single("resume"),

  applyJob
);




// GET ALL APPLICATIONS
router.get(

  "/my-applications",

  protect,

  getMyApplications
);




module.exports = router;*/

const express = require("express");

const router = express.Router();

const {

  getAnalytics,

  shortlistCandidate,

} = require(
  "../controllers/adminController"
);

const {
  getAllResumes,
} = require("../controllers/adminController");

const {

  protect,

} = require(
  "../middleware/authMiddleware"
);




// ANALYTICS
router.get(

  "/analytics",

  protect,

  getAnalytics
);

router.get(
  "/resumes",
  protect,
  getAllResumes
);




// SHORTLIST
router.put(

  "/shortlist/:id",

  protect,

  shortlistCandidate
);




module.exports = router;