/*import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


function Dashboard() {

  const navigate = useNavigate();

  const [totalJobs, setTotalJobs] =
    useState(0);

  const [applications, setApplications] =
    useState(0);

  const [interviews, setInterviews] =
    useState(0);

const [results,
setResults] =
useState([]);

const [selected,
setSelected] =
useState(0);

const [rejected,
setRejected] =
useState(0);


  // FETCH DASHBOARD DATA
  const fetchDashboardData =
    async () => {

      try {

        const token =
          localStorage.getItem("token");




        // JOBS
        const jobsRes =
          await axios.get(
            "http://localhost:5000/api/jobs"
          );




        // APPLICATIONS
        const appRes =
          await axios.get(
            "http://localhost:5000/api/application/my-applications",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

          const resultRes =
await axios.get(
"http://localhost:5000/api/interview/my-results",
{
 headers:{
  Authorization:
  `Bearer ${token}`,
 }
}
);

setResults(
resultRes.data.interviews
);




        // SET DATA
        setTotalJobs(
          jobsRes.data.jobs.length
        );

        setApplications(
          appRes.data.applications.length
        );




        // INTERVIEW COUNT
        const selected =
          appRes.data.applications.filter(
            (item) =>
              item.status === "Selected"
          );
          const selectedCount =
appRes.data.applications.filter(
(item)=>
item.status ===
"Selected"
).length;

const rejectedCount =
appRes.data.applications.filter(
(item)=>
item.status ===
"Rejected"
).length;

setSelected(
selectedCount
);

setRejected(
rejectedCount
);

        setInterviews(
          selected.length
        );

      } catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchDashboardData();

  }, []);

const applicationData = [
{
 name:"Applied",
 value:applications,
},
{
 name:"Selected",
 value:selected,
},
{
 name:"Rejected",
 value:rejected,
},
];
/*
const progressData = [
  {
    attempt: "1",
    score: 60,
  },
  {
    attempt: "2",
    score: 75,
  },
  {
    attempt: "3",
    score: 85,
  },
  {
    attempt: "4",
    score: 90,
  },
];*/
/*
const progressData =
results.map(
(item,index)=>({

  attempt:
  `Interview ${
    index + 1
  }`,

  score:
  item.finalScore,

})
);


  // LOGOUT
  const logoutHandler = () => {

    localStorage.removeItem("token");

    window.location.href =
      "/login";

  };




  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-black text-white p-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          SmartHire AI Dashboard
        </h1>

        <button
          onClick={logoutHandler}
          className="bg-red-500 px-5 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>





      <div className="p-10 grid md:grid-cols-3 gap-5">




        <div
          onClick={() =>
            navigate("/jobs")
          }
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
        >

          <h2 className="text-2xl font-bold">
            Total Jobs
          </h2>

          <p className="text-6xl mt-5 font-bold text-blue-500">
            {totalJobs}
          </p>

        </div>





        <div
          onClick={() =>
            navigate("/candidates")
          }
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
        >

          <h2 className="text-2xl font-bold">
            Applications
          </h2>

          <p className="text-6xl mt-5 font-bold text-green-500">
            {applications}
          </p>

        </div>





        <div
          onClick={() =>
            navigate("/candidates")
          }
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
        >

          <h2 className="text-2xl font-bold">
            Interviews
          </h2>

          <p className="text-6xl mt-5 font-bold text-red-500">
            {interviews}
          </p>

        </div>

      </div>

<div className="px-10 pb-10">

  <div className="bg-white p-5 rounded-xl shadow-lg mt-5">

    <h2 className="text-2xl font-bold mb-5">
      Application Analytics
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <BarChart data={applicationData}>

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="value" />

      </BarChart>

    </ResponsiveContainer>

  </div>


  <div className="bg-white p-5 rounded-xl shadow-lg mt-10">

    <h2 className="text-2xl font-bold mb-5">
      Interview Progress
    </h2>

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <LineChart data={progressData}>

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis dataKey="attempt" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="score"
        />

      </LineChart>

    </ResponsiveContainer>

  </div>

</div>

    </div>

  );
}

export default Dashboard;*/




import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


function Dashboard() {

  const navigate = useNavigate();

  const [totalJobs, setTotalJobs] =
    useState(0);

  const [applications, setApplications] =
    useState(0);

  const [interviews, setInterviews] =
    useState(0);

const [results,
setResults] =
useState([]);

const [selected,
setSelected] =
useState(0);

const [rejected,
setRejected] =
useState(0);


  // FETCH DASHBOARD DATA
  const fetchDashboardData =
    async () => {

      try {

        const token =
          localStorage.getItem("token");




        // JOBS
        const jobsRes =
          await axios.get(
            "http://localhost:5000/api/jobs"
          );




        // APPLICATIONS
        const appRes =
          await axios.get(
            "http://localhost:5000/api/application/my-applications",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

          const resultRes =
await axios.get(
"http://localhost:5000/api/interview/my-results",
{
 headers:{
  Authorization:
  `Bearer ${token}`,
 }
}
);

setResults(
resultRes.data.interviews
);




        // SET DATA
        setTotalJobs(
          jobsRes.data.jobs.length
        );

        setApplications(
          appRes.data.applications.length
        );




        // INTERVIEW COUNT
        const selected =
          appRes.data.applications.filter(
            (item) =>
              item.status === "Selected"
          );
          const selectedCount =
appRes.data.applications.filter(
(item)=>
item.status ===
"Selected"
).length;

const rejectedCount =
appRes.data.applications.filter(
(item)=>
item.status ===
"Rejected"
).length;

setSelected(
selectedCount
);

setRejected(
rejectedCount
);

        setInterviews(
          selected.length
        );

      } catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchDashboardData();

  }, []);

const applicationData = [
{
 name:"Applied",
 value:applications,
},
{
 name:"Selected",
 value:selected,
},
{
 name:"Rejected",
 value:rejected,
},
];
/*
const progressData = [
  {
    attempt: "1",
    score: 60,
  },
  {
    attempt: "2",
    score: 75,
  },
  {
    attempt: "3",
    score: 85,
  },
  {
    attempt: "4",
    score: 90,
  },
];*/

const progressData =
results.map(
(item,index)=>({

  attempt:
  `Interview ${
    index + 1
  }`,

  score:
  item.finalScore,

})
);


  // LOGOUT
  const logoutHandler = () => {

    localStorage.removeItem("token");

    window.location.href =
      "/login";

  };


return (

  <div className="min-h-screen bg-gray-100">

    {/* TOPBAR */}

    <div
      className="
      bg-black
      text-white
      px-4
      sm:px-6
      lg:px-8
      py-4
      flex
      flex-col
      sm:flex-row
      justify-between
      items-center
      gap-4
      "
    >

      <h1
        className="
        text-2xl
        sm:text-3xl
        font-bold
        text-center
        "
      >
        SmartHire AI Dashboard
      </h1>

      <button
        onClick={logoutHandler}
        className="
        bg-red-500
        px-5
        py-2
        rounded
        hover:bg-red-600
        "
      >
        Logout
      </button>

    </div>

    {/* CARDS */}

    <div
      className="
      px-4
      sm:px-6
      lg:px-8
      py-6
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      "
    >

      {/* TOTAL JOBS */}

      <div
        onClick={() =>
          navigate("/jobs")
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
          font-bold
          text-blue-500
          "
        >
          {totalJobs}
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
          Applications
        </h2>

        <p
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          mt-5
          font-bold
          text-green-500
          "
        >
          {applications}
        </p>

      </div>

      {/* INTERVIEWS */}

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
          Interviews
        </h2>

        <p
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          mt-5
          font-bold
          text-red-500
          "
        >
          {interviews}
        </p>

      </div>

    </div>

    {/* CHARTS */}

    <div
      className="
      px-4
      sm:px-6
      lg:px-8
      pb-10
      grid
      grid-cols-1
      xl:grid-cols-2
      gap-6
      "
    >

      {/* APPLICATION ANALYTICS */}

      <div
        className="
        bg-white
        p-4
        sm:p-6
        rounded-xl
        shadow-lg
        "
      >

        <h2 className="text-xl sm:text-2xl font-bold mb-5">
          Application Analytics
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={applicationData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* INTERVIEW PROGRESS */}

      <div
        className="
        bg-white
        p-4
        sm:p-6
        rounded-xl
        shadow-lg
        "
      >

        <h2 className="text-xl sm:text-2xl font-bold mb-5">
          Interview Progress
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart data={progressData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="attempt" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  </div>

);
}

export default Dashboard;