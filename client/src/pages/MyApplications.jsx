/*import { useEffect, useState } from "react";

import axios from "axios";

function MyApplications() {

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




  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        My Applications
      </h1>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {applications.map((app) => (

          <div
            key={app._id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-3xl font-bold mb-3">
              {app.jobId?.title}
            </h2>

            <p className="mb-2">
              <span className="font-bold">
                Name:
              </span>{" "}
              {app.name}
            </p>

            <p className="mb-2">
              <span className="font-bold">
                Email:
              </span>{" "}
              {app.email}
            </p>

            <p className="mb-2">
              <span className="font-bold">
                Phone:
              </span>{" "}
              {app.phone}
            </p>

            <p className="mb-2">
              <span className="font-bold">
                Experience:
              </span>{" "}
              {app.experience}
            </p>

            <p className="mb-4 text-green-600 font-bold">
              Applied Successfully
            </p>




            {app.resume && (

              <a
                href={`http://localhost:5000/${app.resume}`}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-5 py-3 rounded-lg inline-block"
              >
                View Resume
              </a>

            )}

          </div>

        ))}

      </div>

    </div>

  );
}

export default MyApplications;*/

import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {

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

    <div
      className="
      min-h-screen
      bg-gray-100
      px-4
      sm:px-6
      lg:px-8
      py-8
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
        My Applications
      </h1>

      {/* APPLICATIONS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {applications.map((app) => (

          <div
            key={app._id}
            className="
            bg-white
            p-5
            sm:p-6
            rounded-xl
            shadow-lg
            hover:shadow-2xl
            transition
            "
          >

            <h2
              className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-4
              break-words
              "
            >
              {app.jobId?.title}
            </h2>

            <p className="mb-2 break-words">
              <span className="font-bold">
                Name:
              </span>{" "}
              {app.name}
            </p>

            <p className="mb-2 break-words">
              <span className="font-bold">
                Email:
              </span>{" "}
              {app.email}
            </p>

            <p className="mb-2 break-words">
              <span className="font-bold">
                Phone:
              </span>{" "}
              {app.phone}
            </p>

            <p className="mb-2 break-words">
              <span className="font-bold">
                Experience:
              </span>{" "}
              {app.experience}
            </p>

            <div
              className="
              mt-4
              mb-5
              inline-block
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-lg
              font-semibold
              "
            >
              Applied Successfully
            </div>

            {app.resume && (

              <a
                href={`http://localhost:5000/${app.resume}`}
                target="_blank"
                rel="noreferrer"
                className="
                bg-black
                hover:bg-gray-800
                text-white
                px-5
                py-3
                rounded-lg
                block
                text-center
                transition
                w-full
                "
              >
                View Resume
              </a>

            )}

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}

      {applications.length === 0 && (

        <div
          className="
          text-center
          mt-12
          text-gray-500
          "
        >

          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            "
          >
            No Applications Found
          </h2>

          <p className="mt-3">
            Apply for jobs to see them here.
          </p>

        </div>

      )}

    </div>

  );

}

export default MyApplications;