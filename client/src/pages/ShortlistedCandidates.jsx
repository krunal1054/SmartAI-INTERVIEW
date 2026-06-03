/*import { useEffect, useState } from "react";
import axios from "axios";

function ShortlistedCandidates() {

  const [candidates,
    setCandidates] =
    useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await axios.get(

          "http://localhost:5000/api/interview/shortlisted",

          {
            headers: {
              Authorization:
              `Bearer ${token}`,
            },
          }

        );

      setCandidates(
        res.data.candidates
      );

    } catch (error) {

      console.log(error);

    }

  };

 return (

  <div className="min-h-screen bg-gray-100 p-10">

    <h1 className="text-5xl font-bold mb-8 text-center">
      🏆 Leaderboard
    </h1>

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead>

          <tr className="bg-black text-white">

            <th className="p-4">Rank</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Score</th>

          </tr>

        </thead>

        <tbody>

          {candidates.map((item, index) => (

            <tr
              key={item._id}
              className="text-center border-b hover:bg-gray-100"
            >

              <td className="p-4 font-bold">
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : index + 1}
              </td>

              <td className="p-4">
                {item.name}
              </td>

              <td className="p-4">
                {item.email}
              </td>

              <td className="p-4 text-green-600 font-bold">
                {item.finalScore}%
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

);
}

export default ShortlistedCandidates;*/


import { useEffect, useState } from "react";
import axios from "axios";

function ShortlistedCandidates() {

  const [candidates,
    setCandidates] =
    useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.get(
            "http://localhost:5000/api/interview/shortlisted",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setCandidates(
          res.data.candidates
        );

      } catch (error) {

        console.log(error);

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
        text-center
        "
      >
        🏆 Shortlisted Candidates
      </h1>

      {/* MOBILE VIEW */}

      <div className="block lg:hidden space-y-4">

        {candidates.map(
          (item, index) => (

            <div
              key={item._id}
              className="
              bg-white
              p-5
              rounded-xl
              shadow-lg
              "
            >

              <div className="text-2xl mb-3">

                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : `#${index + 1}`}

              </div>

              <p>
                <strong>Name:</strong>{" "}
                {item.name}
              </p>

              <p className="mt-2 break-words">
                <strong>Email:</strong>{" "}
                {item.email}
              </p>

              <p className="mt-2 text-green-600 font-bold">
                Score: {item.finalScore}%
              </p>

            </div>

          )
        )}

      </div>

      {/* DESKTOP TABLE */}

      <div className="hidden lg:block overflow-x-auto">

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="bg-black text-white">

                <th className="p-4">
                  Rank
                </th>

                <th className="p-4">
                  Name
                </th>

                <th className="p-4">
                  Email
                </th>

                <th className="p-4">
                  Score
                </th>

              </tr>

            </thead>

            <tbody>

              {candidates.map(
                (item, index) => (

                  <tr
                    key={item._id}
                    className={`
                    text-center
                    border-b
                    hover:bg-gray-100
                    ${
                      index === 0
                        ? "bg-yellow-50"
                        : index === 1
                        ? "bg-gray-50"
                        : index === 2
                        ? "bg-orange-50"
                        : ""
                    }
                    `}
                  >

                    <td className="p-4 font-bold">

                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : index + 1}

                    </td>

                    <td className="p-4">
                      {item.name}
                    </td>

                    <td className="p-4">
                      {item.email}
                    </td>

                    <td
                      className="
                      p-4
                      text-green-600
                      font-bold
                      "
                    >
                      {item.finalScore}%
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* EMPTY STATE */}

      {candidates.length === 0 && (

        <div
          className="
          text-center
          mt-12
          bg-white
          p-8
          rounded-xl
          shadow-lg
          "
        >

          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-500
            "
          >
            No Shortlisted Candidates Found
          </h2>

          <p className="mt-3 text-gray-400">
            Shortlisted candidates will appear here.
          </p>

        </div>

      )}

    </div>

  );

}

export default ShortlistedCandidates;