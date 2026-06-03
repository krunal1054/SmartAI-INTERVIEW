const Interview = require("../models/Interview");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");

const transporter =
nodemailer.createTransport({

  service: "gmail",

  auth: {

    user:
    process.env.EMAIL_USER,

    pass:
    process.env.EMAIL_PASS,

  },

});


const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

// START INTERVIEW
exports.startInterview = async (req, res) => {
  try {
    const { name, email, field } = req.body;

    const interview = await Interview.create({
      userId: req.user._id,
      name,
      email,
      field,
      status: "Started",
    });

    res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GENERATE AI QUESTIONS
exports.generateQuestions = async (req, res) => {
  try {
    const { field } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Generate 35 hard MCQ interview questions for ${field}.

Return JSON only.

Format:
[
 {
  "question":"Question",
  "options":["A","B","C","D"],
  "answer":"Correct Answer"
 }
]
`;

    const result =
      await model.generateContent(prompt);

    const text =
      result.response.text();

    res.status(200).json({
      success: true,
      questions: text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// SAVE RESULT
exports.saveResult = async (req, res) => {
  try {

    const {
      interviewId,
      round1Score,
      round2Score,
      finalScore,
      result,
    } = req.body;

    const interview =
      await Interview.findByIdAndUpdate(
        
        interviewId,
        {
          round1Score,
          round2Score,
          finalScore,
          result,
          status: "Completed",
        },
        {
          new: true,
        }
      );

      await transporter.sendMail({

  from:
  process.env.EMAIL_USER,

  to:
  interview.email,

  subject:
  "SmartHire AI Interview Result",

  html: `

  <div style="font-family:Arial;padding:20px;">

  <h1 style="color:#2563eb;">
  SmartHire AI
  </h1>

  <h2>
  Hello ${interview.name}
  </h2>

  <p>
  Your AI Interview has been completed.
  </p>

  <h3>
  Final Score:
  ${finalScore}%
  </h3>

  <h3>
  Result:
  ${result}
  </h3>

  ${
    result === "PASS"

    ?

    `

    <div
    style="
    background:#dcfce7;
    padding:15px;
    border-radius:10px;
    ">

    <h2 style="color:green;">
    🎉 Congratulations!
    </h2>

    <p>
    You have successfully cracked
    the SmartHire AI Interview.
    </p>

    <p>
    Status:
    Shortlisted For HR Round
    </p>

    </div>

    `

    :

    `

    <div
    style="
    background:#fee2e2;
    padding:15px;
    border-radius:10px;
    ">

    <h2 style="color:red;">
    Better Luck Next Time
    </h2>

    <p>
    Unfortunately you were not selected.
    </p>

    <p>
    Status:
    Application Closed
    </p>

    </div>

    `
  }

  <br/>

  <p>
  Regards,
  SmartHire AI Hiring Team
  </p>

  </div>

  `,

});

    res.status(200).json({
      success: true,
      interview,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
// GET INTERVIEW RESULTS
exports.getResults = async (req, res) => {

  try {

    const interviews =
      await Interview.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      interviews,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// GET SHORTLISTED CANDIDATES
exports.getShortlisted =
async (req, res) => {

  try {

    const candidates =
      await Interview.find({

        result: "PASS",

      }).sort({
        createdAt: -1,
      });

    res.status(200).json({

      success: true,

      candidates,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};

exports.evaluateAnswer = async (req, res) => {

  try {

    const { answer } = req.body;

    if (!answer || !answer.trim()) {
      return res.json({
        success: true,
        score: 0,
      });
    }

    const words =
      answer.trim().split(" ").length;

    let score = 0;

    if (words >= 50) {
      score = 8;
    }
    else if (words >= 35) {
      score = 6;
    }
    else if (words >= 20) {
      score = 4;
    }
    else if (words >= 10) {
      score = 2;
    }
    else {
      score = 1;
    }

    return res.json({
      success: true,
      score,
    });

  } catch (error) {

    console.log(error);

    return res.json({
      success: true,
      score: 0,
    });

  }

};
exports.getInterviewStats = async (req, res) => {

  try {

    const totalInterviews =
      await Interview.countDocuments();

    const passed =
      await Interview.countDocuments({
        result: "PASS",
      });

    const failed =
      await Interview.countDocuments({
        result: "FAIL",
      });

    const passRate =
      totalInterviews > 0
        ? Math.round(
            (passed /
              totalInterviews) *
              100
          )
        : 0;

    res.json({

      totalInterviews,

      passed,

      failed,

      passRate,

    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};

exports.downloadResultPdf = async (req, res) => {

  try {

    const interview =
      await Interview.findById(
        req.params.id
      );

    if (!interview) {

      return res.status(404).json({
        message: "Interview not found",
      });

    }

    const doc =
      new PDFDocument();

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=result.pdf`
    );

    doc.pipe(res);

    doc.fontSize(24)
      .text("SmartHire AI Interview Result");

    doc.moveDown();

    doc.fontSize(16)
      .text(`Name: ${interview.name}`);

    doc.text(
      `Email: ${interview.email}`
    );

    doc.text(
      `Field: ${interview.field}`
    );

    doc.text(
      `MCQ Score: ${interview.round1Score}%`
    );

    doc.text(
      `Voice Score: ${interview.round2Score}%`
    );

    doc.text(
      `Final Score: ${interview.finalScore}%`
    );

    doc.text(
      `Result: ${interview.result}`
    );

    doc.end();

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.getShortlistedCandidates =
async (req, res) => {

  try {

    const candidates =
      await Interview.find({
        result: "PASS",
      }).sort({
        finalScore: -1,
      });

    res.status(200).json({
      success: true,
      candidates,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.getLeaderboard =
async (req, res) => {

  try {

    const candidates =
      await Interview.find({
        result: "PASS",
      })

      .sort({
        finalScore: -1,
      })

      .limit(20);

    res.status(200).json({

      success: true,

      candidates,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};
exports.generateFeedback =
async (req, res) => {

  try {

    console.log(
      "========== FEEDBACK HIT =========="
    );

    console.log(req.body);

    const {
      field,
      mcqScore,
      voiceScore,
      finalScore,
    } = req.body;

    console.log(
      "Gemini Key Exists:",
      !!process.env.GEMINI_API_KEY
    );

    const model =
      genAI.getGenerativeModel({
        model:
        "gemini-1.5-flash",
      });

    const prompt = `

You are a Senior HR Manager.

Candidate Field:
${field}

MCQ Score:
${mcqScore}

Voice Score:
${voiceScore}

Final Score:
${finalScore}

Generate interview feedback.

Format:

Strengths:
- Point 1
- Point 2

Weaknesses:
- Point 1
- Point 2

Communication:
x/10

Technical Skills:
x/10

Confidence:
x/10

Recommendation:
Selected / Improve Skills

`;

    const result =
      await model.generateContent(
        prompt
      );

    const feedback =
      result.response.text();

    console.log(
      "Feedback Generated Successfully"
    );

    return res.status(200).json({

      success: true,

      feedback,

    });

  } catch (error) {

    console.log(
      "========== FEEDBACK ERROR =========="
    );

    console.log(error);

    console.log(
      error.message
    );

    return res.status(500).json({

      message:
      error.message,

    });

  }

};


exports.getMyResults = async (req, res) => {

  try {

    const interviews =
      await Interview.find({
        userId: req.user._id,
      })
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      interviews,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};