const User =
require("../models/User");

const Job =
require("../models/Job");

const Application =
require("../models/Application");

const nodemailer =
require("nodemailer");




// ADMIN ANALYTICS
exports.getAnalytics =
async (req, res) => {

  try {

    const totalUsers =
    await User.countDocuments();

    const totalJobs =
    await Job.countDocuments();

    const totalApplications =
    await Application.countDocuments();




    res.status(200).json({

      success: true,

      analytics: {

        totalUsers,

        totalJobs,

        totalApplications,

      },

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};




// SHORTLIST CANDIDATE
exports.shortlistCandidate =
async (req, res) => {

  try {

    const application =
    await Application.findById(
      req.params.id
    );




    if (!application) {

      return res.status(404).json({

        message:
        "Application Not Found",

      });

    }




    // STATUS UPDATE
    application.status =
    "Selected";

    await application.save();




    // EMAIL TRANSPORT
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




    // SEND EMAIL
    await transporter.sendMail({

      from:
      process.env.EMAIL_USER,

      to:
      application.email,

      subject:
      "Interview Shortlisted - SmartHire AI",
/*
      html: `

<div style="font-family: Arial; padding:20px;">

<h1 style="color:#2563eb;">
SmartHire AI
</h1>

<h2>
Congratulations ${application.name} 🎉
</h2>

<p>
We reviewed your job application and we are happy to inform you that you have been shortlisted for the next interview round.
</p>

<h3>
Job Details
</h3>

<p>
<b>Status:</b> Selected
</p>

<p>
<b>Interview Process:</b> Online Technical Round
</p>

<p>
Our HR team will contact you shortly with interview timing and meeting details.
</p>

<br/>

<p>
Thank you for applying at SmartHire AI.
</p>

<h3>
Best Regards,
</h3>

<p>
SmartHire AI Hiring Team
</p>

</div>

`,
*/
html: `

<div style="font-family: Arial; padding:20px; background:#f4f4f4;">

<div style="background:white; padding:30px; border-radius:10px;">

<h1 style="color:#2563eb;">
SmartHire AI
</h1>

<h2>
Congratulations ${application.name} 🎉
</h2>

<p>
You have been shortlisted for the next round.
</p>

<h3 style="margin-top:20px;">
AI Interview Round
</h3>

<p>
You are required to complete an AI Based Technical Interview.
</p>

<ul>

<li>
15 Minutes Interview
</li>

<li>
Camera Access Required
</li>

<li>
Microphone Access Required
</li>

<li>
AI Generated Technical Questions
</li>

<li>
Questions Based On Your Selected Field
</li>

<li>
Auto Result Generation
</li>

</ul>

<h3>
Interview Categories
</h3>

<ul>

<li>MERN Stack</li>

<li>Full Stack</li>

<li>WordPress</li>

<li>UI/UX Design</li>

<li>AI/ML</li>

<li>React Developer</li>

<li>Node Developer</li>

<li>Python Developer</li>

<li>Java Developer</li>

<li>DevOps Engineer</li>

</ul>

<p style="margin-top:20px;">
Candidates scoring more than
<b>75%</b>
will qualify for the final HR round.
</p>

<p>
Our HR team will contact you shortly.
</p>

<br/>

<h3>
Best Regards,
</h3>

<p>
SmartHire AI Hiring Team
</p>

</div>

</div>

<p style="margin-top:30px;">

<a
href="http://localhost:5173/ai-interview"

style="
background:#2563eb;
color:white;
padding:15px 25px;
text-decoration:none;
border-radius:8px;
font-size:18px;
font-weight:bold;
"
>

Start AI Interview

</a>

</p>
`,

    });




    res.status(200).json({

      success: true,

      message:
      "Candidate Shortlisted & Email Sent",

    });

  } catch (error) {

    console.log(error);




    res.status(500).json({

      message:
      "Server Error",

    });

  }

};

const Resume = require("../models/Resume");

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      resumes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};