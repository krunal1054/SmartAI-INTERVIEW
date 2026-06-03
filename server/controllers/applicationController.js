const Application =
require("../models/Application");




// APPLY JOB
exports.applyJob =
async (req, res) => {

  try {

    const {

      jobId,
      name,
      email,
      phone,
      experience,

    } = req.body;




    const application =
    await Application.create({

      jobId,

      userId:
      req.user._id,

      name,

      email,

      phone,

      experience,

      resume:
      req.file
      ? req.file.path
      : "",

    });




    res.status(201).json({

      success: true,

      message:
      "Application Submitted",

      application,

    });

  } catch (error) {

    console.log(error);




    res.status(500).json({

      message:
      "Server Error",

    });

  }

};




// GET APPLICATIONS
exports.getMyApplications =
async (req, res) => {

  try {

    const applications =
    await Application.find()

    .populate("jobId")

    .sort({
      createdAt: -1,
    });




    res.status(200).json({

      success: true,

      applications,

    });

  } catch (error) {

    console.log(error);




    res.status(500).json({

      message:
      "Server Error",

    });

  }

};