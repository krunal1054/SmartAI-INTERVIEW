/*import { useEffect, useState } from "react";
import axios from "axios";

function AdminResumes() {
  const [resumes, setResumes] = useState([]);

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/resumes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResumes(res.data.resumes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">
        All Uploaded Resumes
      </h1>

      {resumes.map((item) => (
        <div
          key={item._id}
          className="border p-4 rounded mb-4"
        >
          <p>
            <strong>Name:</strong>{" "}
            {item.userId?.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {item.userId?.email}
          </p>
<p className="whitespace-pre-line">
  <strong>Analysis:</strong>
  <br />
  {item.analysis}
</p>

          <a
            href={`http://localhost:5000/${item.resumeUrl}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded inline-block mt-3"
          >
            View Resume
          </a>
        </div>
      ))}
    </div>
  );
}

export default AdminResumes;*/

import { useEffect, useState } from "react";
import axios from "axios";

function AdminResumes() {

  const [resumes, setResumes] =
    useState([]);

  const fetchResumes = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await axios.get(
          "http://localhost:5000/api/admin/resumes",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setResumes(
        res.data.resumes
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchResumes();

  }, []);

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
        All Uploaded Resumes
      </h1>

      {/* Resume Cards */}

      <div className="space-y-6">

        {resumes.map((item) => (

          <div
            key={item._id}
            className="
            bg-white
            p-4
            sm:p-6
            rounded-xl
            shadow-lg
            border
            "
          >

            {/* User Details */}

            <div className="mb-4">

              <p className="break-words">
                <strong>Name:</strong>{" "}
                {item.userId?.name}
              </p>

              <p className="break-words mt-2">
                <strong>Email:</strong>{" "}
                {item.userId?.email}
              </p>

            </div>

            {/* Analysis */}

            <div
              className="
              bg-gray-50
              p-4
              rounded-lg
              mt-4
              "
            >

              <p className="font-bold mb-2">
                Analysis
              </p>

              <p
                className="
                whitespace-pre-line
                text-gray-700
                break-words
                "
              >
                {item.analysis}
              </p>

            </div>

            {/* Button */}

            <div className="mt-5">

              <a
                href={`http://localhost:5000/${item.resumeUrl}`}
                target="_blank"
                rel="noreferrer"
                className="
                bg-green-500
                hover:bg-green-600
                text-white
                px-5
                py-3
                rounded-lg
                inline-block
                w-full
                sm:w-auto
                text-center
                transition
                "
              >
                View Resume
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AdminResumes;