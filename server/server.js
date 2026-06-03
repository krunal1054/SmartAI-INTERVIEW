/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes =
  require("./routes/authRoutes");

const userRoutes =
  require("./routes/userRoutes");

const jobRoutes =
  require("./routes/jobRoutes");

const applicationRoutes =
  require("./routes/applicationRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

  const interviewRoutes =
require("./routes/interviewRoutes");

const geminiRoutes =
require("./routes/geminiRoutes");

const resumeRoutes =
require("./routes/resumeRoutes");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);



// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/user",
  userRoutes
);

app.use(
  "/api/jobs",
  jobRoutes
);

app.use(
  "/api/application",
  applicationRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);

app.use(
  "/api/gemini",
  geminiRoutes
);

app.use(
 "/api/resume",
 resumeRoutes
);

app.use(
 "/uploads",
 express.static("uploads")
);
// Test Route
app.get("/", (req, res) => {

  res.send(
    "SmartHire AI Backend Running"
  );

});



// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected Successfully"
    );

  })
  .catch((error) => {

    console.log(error);

  });



// Port
const PORT =
  process.env.PORT || 5000;



// Run Server
app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes =
  require("./routes/authRoutes");

const userRoutes =
  require("./routes/userRoutes");

const jobRoutes =
  require("./routes/jobRoutes");

const applicationRoutes =
  require("./routes/applicationRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

const interviewRoutes =
  require("./routes/interviewRoutes");

const geminiRoutes =
  require("./routes/geminiRoutes");

const resumeRoutes =
  require("./routes/resumeRoutes");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Uploads Folder Access
app.use(
  "/uploads",
  express.static("uploads")
);


// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/user",
  userRoutes
);

app.use(
  "/api/jobs",
  jobRoutes
);

app.use(
  "/api/application",
  applicationRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);

app.use(
  "/api/gemini",
  geminiRoutes
);

app.use(
  "/api/resume",
  resumeRoutes
);


// Test Route
app.get("/", (req, res) => {

  res.send(
    "SmartHire AI Backend Running"
  );

});


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected Successfully"
    );

  })
  .catch((error) => {

    console.log(error);

  });


// Port
const PORT =
  process.env.PORT || 5000;


// Run Server
app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});