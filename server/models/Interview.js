const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: String,
  email: String,

  field: {
    type: String,
  },
  candidatePhoto: {
  type: String,
  default: "",
},

  round1Score: {
    type: Number,
    default: 0,
  },

  round2Score: {
    type: Number,
    default: 0,
  },

  finalScore: {
    type: Number,
    default: 0,
  },

  mcqCompleted: {
    type: Boolean,
    default: false,
  },

  voiceCompleted: {
    type: Boolean,
    default: false,
  },

  result: {
    type: String,
    default: "Pending",
  },

  status: {
    type: String,
    default: "Not Started",
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "Interview",
  interviewSchema
);