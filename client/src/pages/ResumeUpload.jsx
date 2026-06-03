/*import { useState, useEffect } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const [resumes, setResumes] = useState([]);

  const fetchResumes = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.get(
          "http://localhost:5000/api/resume/my-resumes",
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

  const uploadResume = async () => {

    try {

      if (!file) {

        alert("Please select resume");

        return;

      }

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      const token =
        localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Resume Uploaded Successfully"
      );

      setFile(null);

      fetchResumes();

    } catch (error) {

      console.log(error);

      alert(
        "Resume Upload Failed"
      );

    }

  };

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-5">
        Resume Upload
      </h1>

      <div className="flex gap-3 items-center">

        <input
          type="file"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <button
          onClick={uploadResume}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Upload
        </button>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5">
          Uploaded Resumes
        </h2>

        {resumes.length === 0 ? (

          <p>
            No Resume Uploaded Yet
          </p>

        ) : (

          resumes.map((item) => (

            <div
              key={item._id}
              className="border p-5 rounded mb-4 shadow bg-white"
            >

              <p className="mb-2">
                <strong>File:</strong>{" "}
                {item.resumeUrl}
              </p>
<p className="whitespace-pre-line">
  <strong>Analysis:</strong>
  <br />
  {item.analysis}
</p>

              <p className="mb-4">
                <strong>Uploaded:</strong>{" "}
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </p>

              <a
                href={`http://localhost:5000/${item.resumeUrl}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                View Resume
              </a>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default ResumeUpload;*/

import { useState, useEffect } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] =
    useState(null);

  const [resumes, setResumes] =
    useState([]);

  const fetchResumes = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.get(
          "http://localhost:5000/api/resume/my-resumes",
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

  const uploadResume = async () => {

    try {

      if (!file) {

        alert(
          "Please select resume"
        );

        return;

      }

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Resume Uploaded Successfully"
      );

      setFile(null);

      fetchResumes();

    } catch (error) {

      console.log(error);

      alert(
        "Resume Upload Failed"
      );

    }

  };

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
        Resume Upload
      </h1>

      {/* UPLOAD SECTION */}

      <div
        className="
        bg-white
        p-5
        sm:p-6
        rounded-xl
        shadow-lg
        mb-10
        "
      >

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          "
        >

          <input
            type="file"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
            className="
            border
            p-3
            rounded
            w-full
            "
          />

          <button
            onClick={uploadResume}
            className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            transition
            w-full
            sm:w-auto
            "
          >
            Upload Resume
          </button>

        </div>

      </div>

      {/* UPLOADED RESUMES */}

      <div>

        <h2
          className="
          text-2xl
          sm:text-3xl
          font-bold
          mb-6
          "
        >
          Uploaded Resumes
        </h2>

        {resumes.length === 0 ? (

          <div
            className="
            bg-white
            p-8
            rounded-xl
            shadow-lg
            text-center
            text-gray-500
            "
          >
            No Resume Uploaded Yet
          </div>

        ) : (

          <div className="space-y-6">

            {resumes.map((item) => (

              <div
                key={item._id}
                className="
                bg-white
                p-5
                sm:p-6
                rounded-xl
                shadow-lg
                "
              >

                <p className="mb-3 break-words">

                  <strong>
                    File:
                  </strong>{" "}

                  {item.resumeUrl}

                </p>

                <div
                  className="
                  bg-gray-50
                  p-4
                  rounded-lg
                  mb-4
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

                <p className="mb-5 text-gray-600">

                  <strong>
                    Uploaded:
                  </strong>{" "}

                  {new Date(
                    item.createdAt
                  ).toLocaleString()}

                </p>

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
                  block
                  sm:inline-block
                  text-center
                  transition
                  "
                >
                  View Resume
                </a>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default ResumeUpload;