import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AdminDashboard() {

  const navigate = useNavigate();

  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalJobs: 0,
    totalApplications: 0,
  });

  const [interviewStats, setInterviewStats] = useState({
    totalInterviews: 0,
    passed: 0,
    failed: 0,
    passRate: 0,
  });

  const [leaderboard, setLeaderboard] = useState([]);

  // FETCH INTERVIEW STATS
  const fetchInterviewStats = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/interview/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInterviewStats(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // FETCH ANALYTICS
  const fetchAnalytics = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/analytics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalytics(
        res.data.analytics
      );

    } catch (error) {

      console.log(error);

    }
  };

  // FETCH LEADERBOARD
  const fetchLeaderboard = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/interview/leaderboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeaderboard(
        res.data.candidates
      );

    } catch (error) {

      console.log(error);

    }
  };

  const interviewData = [
    {
      name: "Passed",
      value: interviewStats.passed,
    },
    {
      name: "Failed",
      value: interviewStats.failed,
    },
  ];

  const monthlyData = [
  { month: "Jan", interviews: 10 },
  { month: "Feb", interviews: 15 },
  { month: "Mar", interviews: 20 },
  { month: "Apr", interviews: 25 },
  { month: "May", interviews: 30 },
];

const analyticsData = [
  {
    name: "Users",
    count: analytics.totalUsers,
  },
  {
    name: "Jobs",
    count: analytics.totalJobs,
  },
  {
    name: "Applications",
    count: analytics.totalApplications,
  },
];

const leaderboardData =
  leaderboard.map((item) => ({
    name: item.name,
    score: item.finalScore,
  }));

useEffect(() => {

  fetchAnalytics();

  fetchInterviewStats();

  fetchLeaderboard();

}, []);

return (

  <div
    className="
    min-h-screen
    bg-gray-100
    px-4
    sm:px-6
    lg:px-8
    py-6
    "
  >

    {/* HEADING */}

    <h1
      className="
      text-3xl
      sm:text-4xl
      lg:text-5xl
      font-bold
      mb-8
      "
    >
      Admin Dashboard
    </h1>

    {/* CARDS */}

    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      "
    >

      {/* USERS */}

      <div
        onClick={() =>
          navigate("/candidates")
        }
        className="
        bg-white
        p-6
        sm:p-8
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transition
        cursor-pointer
        "
      >

        <h2
          className="
          text-xl
          sm:text-2xl
          font-bold
          "
        >
          Total Users
        </h2>

        <p
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          mt-5
          text-blue-500
          font-bold
          "
        >
          {analytics.totalUsers}
        </p>

      </div>
    
{/* JOBS */}
<div
  onClick={() =>
    navigate("/manage-jobs")
  }
  className="
  bg-white
  p-6
  sm:p-8
  rounded-xl
  shadow-lg
  hover:shadow-2xl
  transition
  cursor-pointer
  "
>

  <h2 className="text-xl sm:text-2xl font-bold">
    Total Jobs
  </h2>

  <p
    className="
    text-4xl
    sm:text-5xl
    lg:text-6xl
    mt-5
    text-green-500
    font-bold
    "
  >
    {analytics.totalJobs}
  </p>

</div>

{/* APPLICATIONS */}
<div
  onClick={() =>
    navigate("/candidates")
  }
  className="
  bg-white
  p-6
  sm:p-8
  rounded-xl
  shadow-lg
  hover:shadow-2xl
  transition
  cursor-pointer
  "
>

  <h2 className="text-xl sm:text-2xl font-bold">
    Total Applications
  </h2>

  <p
    className="
    text-4xl
    sm:text-5xl
    lg:text-6xl
    mt-5
    text-red-500
    font-bold
    "
  >
    {analytics.totalApplications}
  </p>

</div>

</div>

{/* INTERVIEW ANALYTICS CARDS */}

<div
  className="
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-4
  gap-6
  mt-10
  "
>

  {/* INTERVIEWS */}
  <div className="bg-blue-500 text-white p-6 sm:p-8 rounded-xl shadow-lg">

    <h2 className="text-xl sm:text-2xl font-bold">
      Interviews
    </h2>

    <p className="text-4xl sm:text-5xl mt-5 font-bold">
      {interviewStats.totalInterviews}
    </p>

  </div>

  {/* PASSED */}
  <div className="bg-green-500 text-white p-6 sm:p-8 rounded-xl shadow-lg">

    <h2 className="text-xl sm:text-2xl font-bold">
      Passed
    </h2>

    <p className="text-4xl sm:text-5xl mt-5 font-bold">
      {interviewStats.passed}
    </p>

  </div>

  {/* FAILED */}
  <div className="bg-red-500 text-white p-6 sm:p-8 rounded-xl shadow-lg">

    <h2 className="text-xl sm:text-2xl font-bold">
      Failed
    </h2>

    <p className="text-4xl sm:text-5xl mt-5 font-bold">
      {interviewStats.failed}
    </p>

  </div>

  {/* PASS RATE */}
  <div className="bg-purple-500 text-white p-6 sm:p-8 rounded-xl shadow-lg">

    <h2 className="text-xl sm:text-2xl font-bold">
      Pass Rate
    </h2>

    <p className="text-4xl sm:text-5xl mt-5 font-bold">
      {interviewStats.passRate}%
    </p>

  </div>

</div>

{/* CHARTS SECTION */}

<div
  className="
  grid
  grid-cols-1
  xl:grid-cols-2
  gap-6
  mt-10
  "
>

  {/* ANALYTICS OVERVIEW */}
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow">

    <h2 className="text-xl sm:text-2xl font-bold mb-5">
      Analytics Overview
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={analyticsData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="count" />

      </BarChart>
    </ResponsiveContainer>

  </div>

  {/* MONTHLY INTERVIEWS */}
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow">

    <h2 className="text-xl sm:text-2xl font-bold mb-5">
      Monthly Interviews
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={monthlyData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="interviews"
          stroke="#3b82f6"
        />

      </LineChart>
    </ResponsiveContainer>

  </div>

</div>
  </div>

);

}

export default AdminDashboard;