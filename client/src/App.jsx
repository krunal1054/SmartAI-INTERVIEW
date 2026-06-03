/*import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import MyApplications from "./pages/MyApplications";
import AdminDashboard from "./pages/AdminDashboard";
import AdminJobs from "./pages/AdminJobs";

import ProtectedRoute from "./routes/ProtectedRoute";
import JobDetails from "./pages/JobDetails";
import Candidates from "./pages/Candidates";
import { Toaster } from "react-hot-toast";
import AIInterview from "./pages/AIInterview";
import InterviewResults from "./pages/InterviewResults";
import ShortlistedCandidates from "./pages/ShortlistedCandidates";
import Leaderboard from "./pages/Leaderboard";

import ResumeUpload from "./pages/ResumeUpload";
import AdminResumes from "./pages/AdminResumes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>

      <Navbar />

      <Toaster />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <CreateJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-jobs"
          element={
            <ProtectedRoute>
              <AdminJobs />
            </ProtectedRoute>
          }
        />
<Route
  path="/job-details"
  element={
    <JobDetails />
  }
/>
<Route
  path="/candidates"
  element={
    <Candidates />
  }
/>
<Route
  path="/ai-interview"
  element={<AIInterview />}
/>
<Route
  path="/results"
  element={<InterviewResults />}
/>
<Route
  path="/shortlisted"
  element={
    <ShortlistedCandidates />
  }
/>
<Route
  path="/leaderboard"
  element={<Leaderboard />}
/>

<Route
 path="/resume-upload"
 element={<ResumeUpload />}
/>

<Route
  path="/admin-resumes"
  element={<AdminResumes />}
/>

<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;*/

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import MyApplications from "./pages/MyApplications";
import AdminDashboard from "./pages/AdminDashboard";
import AdminJobs from "./pages/AdminJobs";
import ProtectedRoute from "./routes/ProtectedRoute";
import JobDetails from "./pages/JobDetails";
import Candidates from "./pages/Candidates";
import { Toaster } from "react-hot-toast";
import AIInterview from "./pages/AIInterview";
import InterviewResults from "./pages/InterviewResults";
import ShortlistedCandidates from "./pages/ShortlistedCandidates";
import Leaderboard from "./pages/Leaderboard";
import ResumeUpload from "./pages/ResumeUpload";
import AdminResumes from "./pages/AdminResumes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>

      <Navbar />

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <CreateJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-jobs"
          element={
            <ProtectedRoute>
              <AdminJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job-details"
          element={<JobDetails />}
        />

        <Route
          path="/candidates"
          element={<Candidates />}
        />

        <Route
          path="/ai-interview"
          element={<AIInterview />}
        />

        <Route
          path="/results"
          element={<InterviewResults />}
        />

        <Route
          path="/shortlisted"
          element={<ShortlistedCandidates />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
          path="/resume-upload"
          element={<ResumeUpload />}
        />

        <Route
          path="/admin-resumes"
          element={<AdminResumes />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </>
  );

}

export default App;
