import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Jobs() {

  const navigate = useNavigate();

  const [jobs, setJobs] =
    useState([]);

  const [search, setSearch] =
    useState("");

  // FETCH JOBS

  const fetchJobs = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/jobs"
        );

      setJobs(
        res.data.jobs
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchJobs();

  }, []);

  // FILTER JOBS

  const filteredJobs =
    jobs.filter((job) =>
      job.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

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
        Latest Jobs
      </h1>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Jobs..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="
        w-full
        border
        p-3
        sm:p-4
        rounded-lg
        mb-8
        bg-white
        shadow-sm
        "
      />

      {/* JOBS GRID */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {filteredJobs.map((job) => (

          <div
            key={job._id}
            className="
            bg-white
            p-5
            sm:p-6
            rounded-xl
            shadow-lg
            hover:shadow-2xl
            transition
            flex
            flex-col
            justify-between
            "
          >

            <div>

              <h2
                className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-4
                break-words
                "
              >
                {job.title}
              </h2>

              <p
                className="
                mb-2
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
                mb-2
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
                text-green-600
                font-bold
                text-lg
                sm:text-xl
                mb-5
                "
              >
                ₹ {job.salary}
              </p>

            </div>

            <button
              onClick={() =>
                navigate(
                  "/job-details",
                  {
                    state: {
                      job,
                    },
                  }
                )
              }
              className="
              bg-black
              hover:bg-gray-800
              text-white
              py-3
              rounded-lg
              w-full
              transition
              "
            >
              Apply Now
            </button>

          </div>

        ))}

      </div>

      {/* NO JOB FOUND */}

      {filteredJobs.length === 0 && (

        <div
          className="
          text-center
          mt-12
          text-gray-500
          text-xl
          "
        >
          No Jobs Found
        </div>

      )}

    </div>

  );

}

export default Jobs;