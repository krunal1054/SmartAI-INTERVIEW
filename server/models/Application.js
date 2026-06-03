const mongoose = require("mongoose");

const applicationSchema =
  new mongoose.Schema(
    {

      // USER ID
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      // JOB ID
      jobId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },

      // CANDIDATE NAME
      name: {
        type: String,
      },

      // EMAIL
      email: {
        type: String,
      },

      // PHONE
      phone: {
        type: String,
      },

      // EXPERIENCE
      experience: {
        type: String,
      },

      // RESUME
      resume: {
        type: String,
        default: "",
      },

      // STATUS
      status: {
        type: String,
        default: "Pending",
      },

    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Application",
    applicationSchema
  );