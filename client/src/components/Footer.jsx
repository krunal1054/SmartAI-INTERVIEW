/*import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (

    <footer className="bg-gray-900 text-white mt-0">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company *//*/*}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              SmartHire AI
            </h2>

            <p className="text-gray-400">
              AI Powered Recruitment Platform
              built using MERN Stack,
              Resume Analysis,
              AI Interviews and Analytics.
            </p>

          </div>

          {/* Quick Links *//*}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <Link to="/">
                Home
              </Link>

              <Link to="/jobs">
                Jobs
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Features *//*}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Features
            </h3>

            <div className="flex flex-col gap-2">

              <p>AI Interview</p>

              <p>Resume Analyzer</p>

              <p>Candidate Ranking</p>

              <p>Analytics Dashboard</p>

            </div>

          </div>

          {/* Contact *//*}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p>
              support@smarthireai.com
            </p>

            <p className="mt-2">
              +91 9876543210
            </p>

            <p className="mt-2">
              Ahmedabad, Gujarat
            </p>

          </div>

        </div>

        {/* Social *//*}

        <div className="flex justify-center gap-8 text-3xl mt-12">

          <FaFacebook />

          <FaInstagram />

          <FaLinkedin />

          <FaGithub />

        </div>

        {/* Bottom *//*}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 SmartHire AI.
          All Rights Reserved.

        </div>

      </div>

    </footer>

  );
}

export default Footer;*/

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

          {/* Company */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              SmartHire AI
            </h2>

            <p className="text-gray-400 text-sm sm:text-base">
              AI Powered Recruitment Platform built using MERN Stack,
              Resume Analysis, AI Interviews and Analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link to="/jobs" className="hover:text-blue-400 transition">
                Jobs
              </Link>

              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Features
            </h3>

            <div className="flex flex-col gap-2 text-gray-300">
              <p>AI Interview</p>
              <p>Resume Analyzer</p>
              <p>Candidate Ranking</p>
              <p>Analytics Dashboard</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="break-all">
              support@smarthireai.com
            </p>

            <p className="mt-2">
              +91 9876543210
            </p>

            <p className="mt-2">
              Ahmedabad, Gujarat
            </p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mt-10">

          <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />

          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

          <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />

          <FaGithub className="cursor-pointer hover:text-gray-400 transition" />

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm sm:text-base text-gray-400">
          © 2026 SmartHire AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;