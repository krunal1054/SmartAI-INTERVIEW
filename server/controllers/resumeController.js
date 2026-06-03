/*const Resume = require("../models/Resume");
const fs = require("fs");

// IMPORTANT
const pdfParse = require("pdf-parse").default;

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

exports.uploadResume =
  async (req, res) => {

    try {
        console.log("Upload API Called");
console.log("File:", req.file);

      if (!req.file) {

        return res.status(400).json({
          message: "Resume file is required",
        });

      }

      const pdfBuffer =
        fs.readFileSync(
          req.file.path
        );

      const pdfData =
        await pdfParse(
          pdfBuffer
        );

      const resumeText =
        pdfData.text || "";

      const model =
        genAI.getGenerativeModel({
          model:
            "gemini-1.5-flash",
        });

      const prompt = `
Analyze this resume.

Resume:

${resumeText}

Return in this format:

Resume Score: xx/100

Skills Found:
- skill1
- skill2

Missing Skills:
- skill1
- skill2

Suggestions:
- suggestion1
- suggestion2
`;

      const result =
        await model.generateContent(
          prompt
        );

      const analysis =
        result.response.text();

      const resume =
        await Resume.create({

          userId:
            req.user._id,

          resumeUrl:
            req.file.path,

          analysis,

        });

      return res.status(200).json({

        success: true,

        resume,

      });

    } catch (error) {

      console.log(
        "Resume Upload Error:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };

exports.getResumes =
  async (req, res) => {

    try {

      const resumes =
        await Resume.find({

          userId:
            req.user._id,

        }).sort({
          createdAt: -1,
        });

      res.status(200).json({

        success: true,

        resumes,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };*/
/*
  const Resume = require("../models/Resume");

exports.uploadResume = async (req, res) => {

  try {

    console.log("Upload API Called");
    console.log("File:", req.file);

    if (!req.file) {

      return res.status(400).json({
        message: "Resume file is required",
      });

    }

    const resume =
      await Resume.create({

        userId:
          req.user._id,

        resumeUrl:
          req.file.path,

        analysis:
          "Test Upload Success",

      });

    return res.status(200).json({

      success: true,

      resume,

    });

  } catch (error) {

    console.log(
      "Resume Upload Error:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }

};

exports.getResumes =
  async (req, res) => {

    try {

      const resumes =
        await Resume.find({

          userId:
            req.user._id,

        }).sort({
          createdAt: -1,
        });

      res.status(200).json({

        success: true,

        resumes,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };*/

  /*
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

    const pdfBuffer =
      fs.readFileSync(
        req.file.path
      );

    console.log("PDF Loaded");
    console.log(
      "File Size:",
      pdfBuffer.length
    );

    const resume =
      await Resume.create({

        userId:
          req.user._id,

        resumeUrl:
          req.file.path,

        analysis:
          "PDF Read Test Success",

      });

    return res.status(200).json({

      success: true,

      resume,

    });

  } catch (error) {

    console.log(
      "Resume Upload Error:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }

};

exports.getResumes =
  async (req, res) => {

    try {

      const resumes =
        await Resume.find({

          userId:
            req.user._id,

        }).sort({
          createdAt: -1,
        });

      return res.status(200).json({

        success: true,

        resumes,

      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };*/

  /*
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

    // Temporary Resume Analysis
    let score = 50;

    const fileName =
      req.file.originalname.toLowerCase();

    if (fileName.includes("react")) score += 10;
    if (fileName.includes("node")) score += 10;
    if (fileName.includes("mern")) score += 10;
    if (fileName.includes("javascript")) score += 10;

    const analysis = `
Resume Score: ${score}/100

Skills Found:
- Resume Uploaded
- PDF File

Suggestions:
- Add React Projects
- Add Node.js Projects
- Add MongoDB Experience
- Add GitHub Profile
- Add Live Project Links
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
    console.log(
      "Resume Upload Error:",
      error
    );

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
    }).sort({
      createdAt: -1,
    });

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
};*/



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