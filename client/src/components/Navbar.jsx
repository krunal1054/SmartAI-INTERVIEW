import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const token =
    localStorage.getItem("token");

  const [showAdminMenu,
    setShowAdminMenu] =
    useState(false);

  const [menuOpen,
    setMenuOpen] =
    useState(false);

  // AUTO CLOSE MOBILE MENU
  useEffect(() => {

    setMenuOpen(false);

  }, [location.pathname]);

  const logoutHandler = () => {

    localStorage.removeItem("token");

    navigate("/");

    window.location.reload();

  };

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-4">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
          >
            SmartHire AI
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex gap-6 items-center text-lg">

            <Link to="/">Home</Link>

            <Link to="/jobs">
              Jobs
            </Link>

            {token ? (

              <>

                <Link to="/dashboard">
                  Dashboard
                </Link>

                <Link to="/my-applications">
                  Applications
                </Link>

                <Link to="/resume-upload">
                  Resume
                </Link>

                <Link to="/about">
                  About
                </Link>

                <Link to="/contact">
                  Contact
                </Link>

                {/* ADMIN */}

                <div className="relative">

                  <button
                    onClick={() =>
                      setShowAdminMenu(
                        !showAdminMenu
                      )
                    }
                    className="font-semibold"
                  >
                    Admin ▼
                  </button>

                  {showAdminMenu && (

                    <div
                      className="
                      absolute
                      top-10
                      right-0
                      bg-white
                      text-black
                      rounded-lg
                      shadow-xl
                      w-60
                      overflow-hidden
                      "
                    >

                      <Link
                        to="/create-job"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Create Job
                      </Link>

                      <Link
                        to="/admin-dashboard"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Admin Dashboard
                      </Link>

                      <Link
                        to="/admin-jobs"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Manage Jobs
                      </Link>

                      <Link
                        to="/candidates"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Candidates
                      </Link>

                      <Link
                        to="/ai-interview"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        AI Interview
                      </Link>

                      <Link
                        to="/results"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Results
                      </Link>

                      <Link
                        to="/shortlisted"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Shortlisted
                      </Link>

                      <Link
                        to="/leaderboard"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Leaderboard
                      </Link>

                      <Link
                        to="/admin-resumes"
                        className="block px-4 py-3 hover:bg-gray-200"
                      >
                        Resume Management
                      </Link>

                    </div>

                  )}

                </div>

                <button
                  onClick={logoutHandler}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>

              </>

            ) : (

              <>

                <Link to="/login">
                  Login
                </Link>

                <Link to="/register">
                  Register
                </Link>

              </>

            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-2xl"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div
            className="
            lg:hidden
            flex
            flex-col
            gap-4
            border-t
            border-gray-700
            pt-4
            pb-5
            "
          >

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/jobs" onClick={closeMenu}>
              Jobs
            </Link>

            {token ? (

              <>

                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>

                <Link
                  to="/my-applications"
                  onClick={closeMenu}
                >
                  Applications
                </Link>

                <Link
                  to="/resume-upload"
                  onClick={closeMenu}
                >
                  Resume
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <Link
                  to="/create-job"
                  onClick={closeMenu}
                >
                  Create Job
                </Link>

                <Link
                  to="/admin-dashboard"
                  onClick={closeMenu}
                >
                  Admin Dashboard
                </Link>

                <Link
                  to="/admin-jobs"
                  onClick={closeMenu}
                >
                  Manage Jobs
                </Link>

                <Link
                  to="/candidates"
                  onClick={closeMenu}
                >
                  Candidates
                </Link>

                <Link
                  to="/ai-interview"
                  onClick={closeMenu}
                >
                  AI Interview
                </Link>

                <Link
                  to="/results"
                  onClick={closeMenu}
                >
                  Results
                </Link>

                <Link
                  to="/shortlisted"
                  onClick={closeMenu}
                >
                  Shortlisted
                </Link>

                <Link
                  to="/leaderboard"
                  onClick={closeMenu}
                >
                  Leaderboard
                </Link>

                <Link
                  to="/admin-resumes"
                  onClick={closeMenu}
                >
                  Resume Management
                </Link>

                <button
                  onClick={logoutHandler}
                  className="
                  bg-red-500
                  py-2
                  rounded
                  hover:bg-red-600
                  "
                >
                  Logout
                </button>

              </>

            ) : (

              <>

                <Link
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                >
                  Register
                </Link>

              </>

            )}

          </div>

        )}

      </div>

    </nav>

  );

}

export default Navbar;