const express =
require("express");

const router =
express.Router();

const {
  evaluateAnswer,
} = require(
  "../controllers/geminiController"
);

router.post(
  "/evaluate",
  evaluateAnswer
);

module.exports =
router;