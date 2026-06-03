const Resume = require("../models/Resume");
const fs = require("fs");

exports.uploadResume = async (req, res) => {
  try {
    console.log("Upload API Called");
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    const pdfBuffer = fs.readFileSync(req.file.path);

    console.log("PDF Loaded");
    console.log("File Size:", pdfBuffer.length);

    const analysis = `
Resume Score: 80/100

Skills Found:
- MERN Stack
- React.js
- Node.js
- MongoDB

Missing Skills:
- Docker
- AWS
- CI/CD

Suggestions:
- Add Docker Project
- Add AWS Deployment
- Add GitHub Links
`;

    const resume = await Resume.create({
      userId: req.user._id,
      resumeUrl: req.file.path,
      analysis,
    });

    return res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    console.log("Resume Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      resumes,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};