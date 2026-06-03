const express =
require("express");

const router =
express.Router();

const upload =
require("../middleware/uploadResume");

const {
 uploadResume,
 getResumes
}
=
require(
 "../controllers/resumeController"
);

const {
 protect
}
=
require(
 "../middleware/authMiddleware"
);
router.get(
 "/my-resumes",
 protect,
 getResumes
);
router.post(
 "/upload",
 protect,
 upload.single("resume"),
 uploadResume
);

module.exports =
router;