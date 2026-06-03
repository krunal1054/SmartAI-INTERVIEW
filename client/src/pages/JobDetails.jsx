/*import { useState } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";

import toast from "react-hot-toast";

function JobDetails() {

  const location = useLocation();

  const { job } = location.state;

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [experience, setExperience] =
    useState("");

  const [resume, setResume] =
    useState(null);




  // APPLY JOB
  const applyJob =
    async (e) => {

      e.preventDefault();

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        if (!token) {

          toast.error(
            "Please Login First"
          );

          return;

        }

        const formData =
          new FormData();

        formData.append(
          "jobId",
          job._id
        );

        formData.append(
          "name",
          name
        );

        formData.append(
          "email",
          email
        );

        formData.append(
          "phone",
          phone
        );

        formData.append(
          "experience",
          experience
        );

        if (resume) {

          formData.append(
            "resume",
            resume
          );

        }

        const res =
          await axios.post(
            "http://localhost:5000/api/application/apply",
            formData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        toast.success(
          res.data.message
        );

      } catch (error) {

        toast.error(
          error.response?.data?.message
        );

      }

    };




  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        <h1 className="text-5xl font-bold mb-5">
          {job.title}
        </h1>

        <p className="text-xl mb-3">
          <span className="font-bold">
            Company:
          </span>{" "}
          {job.company}
        </p>

        <p className="text-xl mb-3">
          <span className="font-bold">
            Location:
          </span>{" "}
          {job.location}
        </p>

        <p className="text-green-600 text-2xl font-bold mb-5">
          ₹ {job.salary}
        </p>

        <p className="text-gray-700 mb-10">
          {job.description}
        </p>




        <form
          onSubmit={applyJob}
        >

          <h2 className="text-3xl font-bold mb-5">
            Apply For This Job
          </h2>





          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="border p-4 rounded w-full mb-5"
            required
          />




          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="border p-4 rounded w-full mb-5"
            required
          />




          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="border p-4 rounded w-full mb-5"
            required
          />




          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) =>
              setExperience(
                e.target.value
              )
            }
            className="border p-4 rounded w-full mb-5"
            required
          />




          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setResume(
                e.target.files[0]
              )
            }
            className="border p-4 rounded w-full mb-5 bg-white"
            required
          />




          <button
            type="submit"
            className="bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>

  );
}

export default JobDetails;*/

import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function JobDetails() {

  const location = useLocation();

  const { job } = location.state;

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [experience, setExperience] =
    useState("");

  const [resume, setResume] =
    useState(null);

  // APPLY JOB

  const applyJob = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      if (!token) {

        toast.error(
          "Please Login First"
        );

        return;

      }

      const formData =
        new FormData();

      formData.append(
        "jobId",
        job._id
      );

      formData.append(
        "name",
        name
      );

      formData.append(
        "email",
        email
      );

      formData.append(
        "phone",
        phone
      );

      formData.append(
        "experience",
        experience
      );

      if (resume) {

        formData.append(
          "resume",
          resume
        );

      }

      const res =
        await axios.post(
          "http://localhost:5000/api/application/apply",
          formData,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      toast.success(
        res.data.message
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message
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

      <div
        className="
        max-w-4xl
        mx-auto
        bg-white
        p-5
        sm:p-8
        lg:p-10
        rounded-xl
        shadow-lg
        "
      >

        {/* JOB DETAILS */}

        <h1
          className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          mb-5
          break-words
          "
        >
          {job.title}
        </h1>

        <p
          className="
          text-base
          sm:text-lg
          lg:text-xl
          mb-3
          break-words
          "
        >
          <span className="font-bold">
            Company:
          </span>{" "}
          {job.company}
        </p>

        <p
          className="
          text-base
          sm:text-lg
          lg:text-xl
          mb-3
          break-words
          "
        >
          <span className="font-bold">
            Location:
          </span>{" "}
          {job.location}
        </p>

        <p
          className="
          text-xl
          sm:text-2xl
          font-bold
          text-green-600
          mb-5
          "
        >
          ₹ {job.salary}
        </p>

        <p
          className="
          text-gray-700
          mb-10
          leading-relaxed
          break-words
          "
        >
          {job.description}
        </p>

        {/* APPLY FORM */}

        <form
          onSubmit={applyJob}
        >

          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            mb-6
            "
          >
            Apply For This Job
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="
            border
            p-3
            sm:p-4
            rounded
            w-full
            mb-5
            "
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            border
            p-3
            sm:p-4
            rounded
            w-full
            mb-5
            "
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="
            border
            p-3
            sm:p-4
            rounded
            w-full
            mb-5
            "
            required
          />

          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) =>
              setExperience(
                e.target.value
              )
            }
            className="
            border
            p-3
            sm:p-4
            rounded
            w-full
            mb-5
            "
            required
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setResume(
                e.target.files[0]
              )
            }
            className="
            border
            p-3
            sm:p-4
            rounded
            w-full
            mb-6
            bg-white
            "
            required
          />

          <button
            type="submit"
            className="
            bg-black
            hover:bg-gray-800
            text-white
            px-8
            py-3
            sm:px-10
            sm:py-4
            rounded-lg
            transition
            w-full
            sm:w-auto
            "
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>

  );

}

export default JobDetails;