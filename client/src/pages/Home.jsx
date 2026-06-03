import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaFileUpload,
  FaChartBar,
  FaRobot,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

import Footer from "../components/Footer";

function Home() {

  return (

    <>
      <div className="min-h-screen bg-gray-100">

        {/* HERO SECTION */}

        <div
          className="relative min-h-screen flex items-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0 bg-black/80"></div>

          <div
            className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
            py-16
            "
          >

            <div>

              <h1
                className="
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-bold
                mb-6
                "
              >
                AI Powered
                <br />
                Recruitment Platform
              </h1>

              <p
                className="
                text-base
                sm:text-lg
                lg:text-xl
                text-gray-300
                mb-8
                "
              >
                SmartHire AI helps companies hire smarter
                and candidates get hired faster through
                AI Interviews, Resume Analysis and Analytics.
              </p>

              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
                "
              >

                <Link
                  to="/jobs"
                  className="
                  bg-blue-600
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  text-center
                  "
                >
                  Explore Jobs
                </Link>

                <Link
                  to="/register"
                  className="
                  border
                  border-white
                  px-8
                  py-4
                  rounded-xl
                  text-center
                  "
                >
                  Get Started
                </Link>

              </div>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="SmartHire AI"
                className="
                rounded-2xl
                shadow-2xl
                h-[250px]
                sm:h-[350px]
                lg:h-[500px]
                w-full
                object-cover
                "
              />

            </div>

          </div>

        </div>

        {/* FEATURES */}

        <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

          <h1
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            mb-16
            "
          >
            Platform Features
          </h1>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            max-w-7xl
            mx-auto
            "
          >

            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition">

              <FaBriefcase className="text-4xl sm:text-5xl text-blue-600 mb-5" />

              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                Job Search
              </h2>

              <p className="text-gray-600">
                Search thousands of jobs with advanced filters and categories.
              </p>

            </div>

            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition">

              <FaFileUpload className="text-4xl sm:text-5xl text-green-600 mb-5" />

              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                Resume Upload
              </h2>

              <p className="text-gray-600">
                Upload resumes easily and apply directly to companies.
              </p>

            </div>

            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-2xl transition">

              <FaChartBar className="text-4xl sm:text-5xl text-red-600 mb-5" />

              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                Admin Dashboard
              </h2>

              <p className="text-gray-600">
                Manage jobs, applications, analytics, and users.
              </p>

            </div>

          </div>

        </div>

        {/* AI FEATURES */}

        <div className="py-16 sm:py-20 bg-white">

          <h1
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            mb-16
            "
          >
            AI Powered Features
          </h1>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            "
          >

            <div className="bg-gray-50 p-6 sm:p-10 rounded-xl shadow">

              <FaRobot className="text-4xl sm:text-5xl mb-5" />

              <h2 className="text-2xl font-bold">
                AI Interview
              </h2>

              <p className="mt-4">
                Automated interview analysis.
              </p>

            </div>

            <div className="bg-gray-50 p-6 sm:p-10 rounded-xl shadow">

              <FaBrain className="text-4xl sm:text-5xl mb-5" />

              <h2 className="text-2xl font-bold">
                Resume Analyzer
              </h2>

              <p className="mt-4">
                AI based resume evaluation.
              </p>

            </div>

            <div className="bg-gray-50 p-6 sm:p-10 rounded-xl shadow">

              <FaUsers className="text-4xl sm:text-5xl mb-5" />

              <h2 className="text-2xl font-bold">
                Candidate Ranking
              </h2>

              <p className="mt-4">
                Smart ranking system.
              </p>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

          <div
            className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
            text-center
            "
          >

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                10K+
              </h1>
              <p>Active Users</p>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                500+
              </h1>
              <p>Companies</p>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                8K+
              </h1>
              <p>Jobs Posted</p>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                15K+
              </h1>
              <p>Applications</p>
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="bg-blue-600 text-white py-16 sm:py-20 text-center px-4">

          <h1
            className="
            text-3xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            "
          >
            Ready To Start?
          </h1>

          <p className="mt-5 text-lg sm:text-xl">
            Join SmartHire AI Today
          </p>

          <Link
            to="/register"
            className="
            inline-block
            mt-8
            bg-white
            text-black
            px-8
            py-4
            rounded-xl
            font-bold
            "
          >
            Get Started
          </Link>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Home;