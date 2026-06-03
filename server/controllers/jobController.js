/*const Job = require("../models/Job");


// Create Job
exports.createJob = async (req, res) => {

  try {

    const {
      title,
      company,
      location,
      salary,
      description,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      salary,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Job Created Successfully",
      job,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// Get All Jobs
exports.getJobs = async (req, res) => {

  try {

    const jobs = await Job.find();

    res.status(200).json({
      success: true,
      jobs,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// Update Job
exports.updateJob = async (req, res) => {

  try {

    const updatedJob =
      await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message: "Job Updated Successfully",
      updatedJob,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// Delete Job
exports.deleteJob = async (req, res) => {

  try {

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Job Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};*/

const Job =
require("../models/Job");




// CREATE JOB
exports.createJob =
async (req, res) => {

  try {

    const {

      title,
      company,
      location,
      salary,
      experience,
      category,
      skills,
      description,

    } = req.body;




    const job =
    await Job.create({

      title,
      company,
      location,
      salary,
      experience,
      category,
      skills,
      description,

    });




    res.status(201).json({

      success: true,

      message:
      "Job Created Successfully",

      job,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};




// GET JOBS
exports.getJobs =
async (req, res) => {

  try {

    const jobs =
    await Job.find()
    .sort({
      createdAt: -1,
    });




    res.status(200).json({

      success: true,

      jobs,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};




// UPDATE JOB
exports.updateJob =
async (req, res) => {

  try {

    const updatedJob =
    await Job.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true,
      }
    );




    res.status(200).json({

      success: true,

      message:
      "Job Updated Successfully",

      updatedJob,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};




// DELETE JOB
exports.deleteJob =
async (req, res) => {

  try {

    await Job.findByIdAndDelete(
      req.params.id
    );




    res.status(200).json({

      success: true,

      message:
      "Job Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }

};