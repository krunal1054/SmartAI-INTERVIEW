/*import {
  FaBullseye,
  FaRocket,
  FaBrain,
  FaUsers,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION *//*}

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')",
        }}
      >
        <div className="bg-black/70 p-12 rounded-2xl text-center max-w-4xl">

          <h1 className="text-7xl font-bold text-white">
            SmartHire AI
          </h1>

          <p className="text-2xl text-gray-200 mt-6">
            AI Powered Recruitment Platform
          </p>

          <button className="mt-8 bg-blue-600 px-8 py-4 rounded-xl text-white font-bold hover:bg-blue-700">
            Explore Platform
          </button>

        </div>
      </div>

      {/* COMPANY STORY *//*}

      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-5xl font-bold mb-8">
          Our Story
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          SmartHire AI is a next-generation recruitment platform
          built using MERN Stack and Artificial Intelligence.
          It helps companies streamline hiring through AI-based
          interviews, resume analysis, candidate ranking, and
          hiring analytics.
        </p>

      </div>

      {/* MISSION VISION *//*}

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto p-10">

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaBullseye className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">
            Mission
          </h3>
          <p className="mt-3 text-gray-600">
            Simplify hiring using AI.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaRocket className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">
            Vision
          </h3>
          <p className="mt-3 text-gray-600">
            Build the smartest hiring platform.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaBrain className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">
            AI Powered
          </h3>
          <p className="mt-3 text-gray-600">
            Smart interviews and analytics.
          </p>
        </div>

      </div>

      {/* STATS *//*}

      <div className="bg-blue-600 text-white py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h1 className="text-5xl font-bold">
              500+
            </h1>
            <p className="mt-2">
              Companies
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              10K+
            </h1>
            <p className="mt-2">
              Candidates
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              95%
            </h1>
            <p className="mt-2">
              Hiring Accuracy
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              24/7
            </h1>
            <p className="mt-2">
              AI Support
            </p>
          </div>

        </div>

      </div>

      {/* FEATURES *//*}

      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-5xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            AI Interview
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            Resume Analyzer
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            Candidate Ranking
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            Analytics Dashboard
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            Email Notifications
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            PDF Reports
          </div>

        </div>

      </div>

      {/* TECH STACK *//*}

      <div className="bg-white py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-12">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="p-8 shadow rounded-xl">
              MongoDB
            </div>

            <div className="p-8 shadow rounded-xl">
              Express.js
            </div>

            <div className="p-8 shadow rounded-xl">
              React.js
            </div>

            <div className="p-8 shadow rounded-xl">
              Node.js
            </div>

          </div>

        </div>

      </div>

      {/* TEAM *//*}/*

      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-5xl font-bold text-center mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaUsers className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">
              CEO
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaUsers className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">
              HR Director
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCode className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">
              MERN Developer
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaChartLine className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">
              AI Engineer
            </h3>
          </div>

        </div>

      </div>

      {/* CTA *//*}

      <div className="bg-black text-white text-center py-20">

        <h2 className="text-5xl font-bold">
          Ready To Transform Hiring?
        </h2>

        <p className="mt-5 text-xl">
          Join SmartHire AI Today
        </p>

        <button className="mt-8 bg-blue-600 px-8 py-4 rounded-xl">
          Get Started
        </button>

      </div>

    </div>
  );
}

export default About;*/

import {
  FaBullseye,
  FaRocket,
  FaBrain,
  FaUsers,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')",
        }}
      >
        <div className="bg-black/70 p-6 sm:p-8 lg:p-12 rounded-2xl text-center max-w-4xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            SmartHire AI
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mt-4">
            AI Powered Recruitment Platform
          </p>

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white font-bold hover:bg-blue-700 transition">
            Explore Platform
          </button>

        </div>
      </div>

      {/* COMPANY STORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Our Story
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-8">
          SmartHire AI is a next-generation recruitment platform
          built using MERN Stack and Artificial Intelligence.
          It helps companies streamline hiring through AI-based
          interviews, resume analysis, candidate ranking, and
          hiring analytics.
        </p>

      </div>

      {/* MISSION VISION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaBullseye className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">Mission</h3>
          <p className="mt-3 text-gray-600">
            Simplify hiring using AI.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaRocket className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">Vision</h3>
          <p className="mt-3 text-gray-600">
            Build the smartest hiring platform.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaBrain className="text-5xl mx-auto mb-5" />
          <h3 className="text-2xl font-bold">AI Powered</h3>
          <p className="mt-3 text-gray-600">
            Smart interviews and analytics.
          </p>
        </div>

      </div>

      {/* STATS */}
      <div className="bg-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center px-4">

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              500+
            </h1>
            <p className="mt-2">Companies</p>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              10K+
            </h1>
            <p className="mt-2">Candidates</p>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              95%
            </h1>
            <p className="mt-2">Hiring Accuracy</p>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              24/7
            </h1>
            <p className="mt-2">AI Support</p>
          </div>

        </div>

      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-xl shadow">AI Interview</div>
          <div className="bg-white p-8 rounded-xl shadow">Resume Analyzer</div>
          <div className="bg-white p-8 rounded-xl shadow">Candidate Ranking</div>
          <div className="bg-white p-8 rounded-xl shadow">Analytics Dashboard</div>
          <div className="bg-white p-8 rounded-xl shadow">Email Notifications</div>
          <div className="bg-white p-8 rounded-xl shadow">PDF Reports</div>

        </div>

      </div>

      {/* TECH STACK */}
      <div className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            <div className="p-8 shadow rounded-xl">MongoDB</div>
            <div className="p-8 shadow rounded-xl">Express.js</div>
            <div className="p-8 shadow rounded-xl">React.js</div>
            <div className="p-8 shadow rounded-xl">Node.js</div>

          </div>

        </div>

      </div>

      {/* TEAM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaUsers className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">CEO</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaUsers className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">HR Director</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCode className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">MERN Developer</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaChartLine className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">AI Engineer</h3>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="bg-black text-white text-center py-16 px-4">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready To Transform Hiring?
        </h2>

        <p className="mt-5 text-base sm:text-lg lg:text-xl">
          Join SmartHire AI Today
        </p>

        <button className="mt-8 bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>

      </div>

    </div>
  );
}

export default About;