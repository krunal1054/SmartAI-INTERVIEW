/*const mongoose = require("mongoose");

const jobSchema =
  new mongoose.Schema(
    {

      title: {
        type: String,
        required: true,
      },

      company: {
        type: String,
        required: true,
      },

      location: {
        type: String,
        required: true,
      },

      salary: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Job",
    jobSchema
  );*/

  const mongoose = require("mongoose");

const jobSchema =
new mongoose.Schema(

  {

    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },

    skills: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

  },

  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "Job",
  jobSchema
);