const express = require("express");

const router = express.Router();

const {
  protect,
} = require("../middleware/authMiddleware");
/*const {
  startInterview,
  saveResult,
  generateQuestions,
  evaluateAnswer,
  getResults,
} = require(
  "../controllers/interviewController"
);*/

const {
  startInterview,
  saveResult,
  generateQuestions,
  evaluateAnswer,
  getResults,
  getShortlisted,
  getInterviewStats,
  downloadResultPdf,
  getShortlistedCandidates,
  getLeaderboard,
  generateFeedback,
  getMyResults,
} = require(
  "../controllers/interviewController"
);

router.post(
  "/start",
  protect,
  startInterview
);

router.post(
  "/generate-questions",
  protect,
  generateQuestions
);

router.post(
  "/save-result",
  protect,
  saveResult
);

router.get(
  "/results",
  protect,
  getResults
);
router.get(
  "/shortlisted",
  protect,
  getShortlisted
);
router.get(
  "/stats",
  protect,
  getInterviewStats
);
router.get(
  "/pdf/:id",
  downloadResultPdf
);
router.get(
  "/shortlisted",
  protect,
  getShortlistedCandidates
);
router.get(
  "/leaderboard",
  protect,
  getLeaderboard
);
router.get(
  "/my-results",
  protect,
  getMyResults
);
router.post(
  "/feedback",
  protect,
  generateFeedback
);
router.post(
  "/evaluate",
  protect,
  evaluateAnswer
);

module.exports = router;