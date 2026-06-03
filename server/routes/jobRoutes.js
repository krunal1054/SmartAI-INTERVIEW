const express = require("express");

const {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();


// Create Job
router.post(
  "/create",
  protect,
  createJob
);


// Get All Jobs
router.get(
  "/",
  getJobs
);


// Update Job
router.put(
  "/update/:id",
  protect,
  updateJob
);


// Delete Job
router.delete(
  "/delete/:id",
  protect,
  deleteJob
);


module.exports = router;