const multer = require("multer");


// Storage
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});


// File Filter
const fileFilter = (req, file, cb) => {

  if (
    file.mimetype === "application/pdf"
  ) {

    cb(null, true);

  } else {

    cb(
      new Error("Only PDF Allowed"),
      false
    );

  }

};


// Upload
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;