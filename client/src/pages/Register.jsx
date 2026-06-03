/*import { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });




  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };




  // Handle Submit
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          formData
        );

        toast.success(
          res.data.message
        );

        navigate("/login");

      } catch (error) {

        toast.error(
          error.response.data.message
        );

      }

    };




  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">

      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">

        <div className="bg-black text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold mb-6">
            Join SmartHire AI
          </h1>

          <p className="text-gray-300 text-lg">
            Create your account and start
            applying for jobs, uploading
            resumes, and exploring amazing
            career opportunities.
          </p>

        </div>




        <div className="p-10">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Register
          </h2>


          <form
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 mb-5 rounded-lg focus:outline-none focus:border-black"
            />


            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 mb-5 rounded-lg focus:outline-none focus:border-black"
            />


            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-4 mb-5 rounded-lg focus:outline-none focus:border-black"
            />


            <button
              className="bg-black text-white w-full p-4 rounded-lg hover:bg-gray-800 transition"
            >
              Register
            </button>

          </form>




          <p className="mt-5 text-center">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-500 font-bold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;*/

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  useNavigate,
  Link,
} from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  // Handle Change

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // Handle Submit

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await axios.post(
            "http://localhost:5000/api/auth/register",
            formData
          );

        toast.success(
          res.data.message
        );

        navigate("/login");

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
      flex
      justify-center
      items-center
      px-4
      sm:px-6
      lg:px-8
      py-8
      "
    >

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        bg-white
        rounded-2xl
        shadow-2xl
        overflow-hidden
        max-w-5xl
        w-full
        "
      >

        {/* LEFT SIDE */}

        <div
          className="
          bg-black
          text-white
          p-6
          sm:p-10
          flex
          flex-col
          justify-center
          "
        >

          <h1
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mb-6
            "
          >
            Join SmartHire AI
          </h1>

          <p
            className="
            text-gray-300
            text-base
            sm:text-lg
            "
          >
            Create your account and start
            applying for jobs, uploading
            resumes, and exploring amazing
            career opportunities.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
          p-6
          sm:p-8
          lg:p-10
          "
        >

          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            mb-8
            text-center
            "
          >
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              sm:p-4
              mb-5
              rounded-lg
              focus:outline-none
              focus:border-black
              "
              required
            />

            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              sm:p-4
              mb-5
              rounded-lg
              focus:outline-none
              focus:border-black
              "
              required
            />

            {/* PASSWORD */}

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              sm:p-4
              mb-5
              rounded-lg
              focus:outline-none
              focus:border-black
              "
              required
            />

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="
              bg-black
              text-white
              w-full
              p-3
              sm:p-4
              rounded-lg
              hover:bg-gray-800
              transition
              "
            >
              Register
            </button>

          </form>

          {/* LOGIN LINK */}

          <p
            className="
            mt-5
            text-center
            text-sm
            sm:text-base
            "
          >

            Already have an account?{" "}

            <Link
              to="/login"
              className="
              text-blue-500
              font-bold
              hover:underline
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Register;
