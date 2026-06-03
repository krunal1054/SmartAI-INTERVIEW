const express = require("express");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();


// User Dashboard
router.get(
  "/dashboard",
  protect,
  (req, res) => {

    res.json({
      message: "Welcome User Dashboard",
      user: req.user,
    });

  }
);


// Admin Dashboard
router.get(
  "/admin",
  protect,
  admin,
  (req, res) => {

    res.json({
      message: "Welcome Admin Dashboard",
    });

  }
);


module.exports = router;