/*import { useEffect, useState } from "react";

import axios from "axios";

function Candidates() {

  const [applications,
    setApplications] =
    useState([]);




  // FETCH APPLICATIONS
  const fetchApplications =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );




        const res =
          await axios.get(

            "http://localhost:5000/api/application/my-applications",

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );




        setApplications(
          res.data.applications
        );

      } catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchApplications();

  }, []);




  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Candidates
      </h1>




      <div className="overflow-x-auto">

        <table className="w-full bg-white rounded-xl shadow-lg">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Phone
              </th>

              <th className="p-4">
                Experience
              </th>

              <th className="p-4">
                Job
              </th>

              <th className="p-4">
                Resume
              </th>

            </tr>

          </thead>




          <tbody>

            {applications.map((app) => (

              <tr
                key={app._id}
                className="border-b text-center"
              >

                <td className="p-4">
                  {app.name}
                </td>

                <td className="p-4">
                  {app.email}
                </td>

                <td className="p-4">
                  {app.phone}
                </td>

                <td className="p-4">
                  {app.experience}
                </td>

                <td className="p-4">
                  {app.jobId?.title}
                </td>

                <td className="p-4">

                  {app.resume && (

                    <a
                      href={`http://localhost:5000/${app.resume}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-black text-white px-4 py-2 rounded"
                    >
                      View
                    </a>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Candidates;*/
/*

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

function Candidates() {

  const [applications,
    setApplications] =
    useState([]);




  // FETCH
  const fetchApplications =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );




        const res =
          await axios.get(

            "http://localhost:5000/api/application/my-applications",

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );




        setApplications(
          res.data.applications
        );

      } catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchApplications();

  }, []);




  // SHORTLIST
  const shortlistCandidate =
    async (id) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );




        const res =
          await axios.put(

            `http://localhost:5000/api/admin/shortlist/${id}`,

            {},

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );




        toast.success(
          res.data.message
        );




        fetchApplications();

      } catch (error) {

        toast.error(
          error.response?.data?.message
        );

      }

    };




  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Candidates
      </h1>




      <div className="overflow-x-auto">

        <table className="w-full bg-white rounded-xl shadow-lg">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Phone
              </th>

              <th className="p-4">
                Experience
              </th>

              <th className="p-4">
                Job
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Resume
              </th>

              <th className="p-4">
                Action
              </th>

            </tr>

          </thead>




          <tbody>

            {applications.map((app) => (

              <tr
                key={app._id}
                className="border-b text-center"
              >

                <td className="p-4">
                  {app.name}
                </td>

                <td className="p-4">
                  {app.email}
                </td>

                <td className="p-4">
                  {app.phone}
                </td>

                <td className="p-4">
                  {app.experience}
                </td>

                <td className="p-4">
                  {app.jobId?.title}
                </td>

                <td className="p-4 font-bold text-green-600">
                  {app.status}
                </td>

                <td className="p-4">

                  {app.resume && (

                    <a
                      href={`http://localhost:5000/${app.resume}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-black text-white px-4 py-2 rounded"
                    >
                      View
                    </a>

                  )}

                </td>




                <td className="p-4">

                  <button
                    onClick={() =>
                      shortlistCandidate(
                        app._id
                      )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Shortlist
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Candidates;*/






import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

function Candidates() {

  const [applications,
    setApplications] =
    useState([]);




  // FETCH
  const fetchApplications =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );




        const res =
          await axios.get(

            "http://localhost:5000/api/application/my-applications",

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );




        setApplications(
          res.data.applications
        );

      } catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchApplications();

  }, []);




  // SHORTLIST
  const shortlistCandidate =
    async (id) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );




        const res =
          await axios.put(

            `http://localhost:5000/api/admin/shortlist/${id}`,

            {},

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );




        toast.success(
          res.data.message
        );




        fetchApplications();

      } catch (error) {

        toast.error(
          error.response?.data?.message
        );

      }

    };


return (

  <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">

    {/* Heading */}

    <h1
      className="
      text-3xl
      sm:text-4xl
      lg:text-5xl
      font-bold
      mb-8
      "
    >
      Candidates
    </h1>

    {/* Mobile Cards */}

    <div className="block lg:hidden space-y-4">

      {applications.map((app) => (

        <div
          key={app._id}
          className="
          bg-white
          p-5
          rounded-xl
          shadow-lg
          "
        >

          <p>
            <strong>Name:</strong> {app.name}
          </p>

          <p className="mt-2 break-words">
            <strong>Email:</strong> {app.email}
          </p>

          <p className="mt-2">
            <strong>Phone:</strong> {app.phone}
          </p>

          <p className="mt-2">
            <strong>Experience:</strong> {app.experience}
          </p>

          <p className="mt-2">
            <strong>Job:</strong> {app.jobId?.title}
          </p>

          <p className="mt-2 text-green-600 font-bold">
            Status: {app.status}
          </p>

          <div className="flex flex-col gap-3 mt-4">

            {app.resume && (

              <a
                href={`http://localhost:5000/${app.resume}`}
                target="_blank"
                rel="noreferrer"
                className="
                bg-black
                text-white
                py-2
                rounded
                text-center
                "
              >
                View Resume
              </a>

            )}

            <button
              onClick={() =>
                shortlistCandidate(
                  app._id
                )
              }
              className="
              bg-blue-500
              text-white
              py-2
              rounded
              "
            >
              Shortlist
            </button>

          </div>

        </div>

      ))}

    </div>

    {/* Desktop Table */}

    <div className="hidden lg:block overflow-x-auto">

      <table
        className="
        w-full
        bg-white
        rounded-xl
        shadow-lg
        "
      >

        <thead className="bg-black text-white">

          <tr>

            <th className="p-4">Name</th>

            <th className="p-4">Email</th>

            <th className="p-4">Phone</th>

            <th className="p-4">Experience</th>

            <th className="p-4">Job</th>

            <th className="p-4">Status</th>

            <th className="p-4">Resume</th>

            <th className="p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {applications.map((app) => (

            <tr
              key={app._id}
              className="
              border-b
              text-center
              "
            >

              <td className="p-4">
                {app.name}
              </td>

              <td className="p-4">
                {app.email}
              </td>

              <td className="p-4">
                {app.phone}
              </td>

              <td className="p-4">
                {app.experience}
              </td>

              <td className="p-4">
                {app.jobId?.title}
              </td>

              <td className="p-4 font-bold text-green-600">
                {app.status}
              </td>

              <td className="p-4">

                {app.resume && (

                  <a
                    href={`http://localhost:5000/${app.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    bg-black
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                  >
                    View
                  </a>

                )}

              </td>

              <td className="p-4">

                <button
                  onClick={() =>
                    shortlistCandidate(
                      app._id
                    )
                  }
                  className="
                  bg-blue-500
                  text-white
                  px-4
                  py-2
                  rounded
                  "
                >
                  Shortlist
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

);
}

export default Candidates;