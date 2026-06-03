import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {

  const [candidates, setCandidates] =
    useState([]);

  useEffect(() => {

    fetchLeaderboard();

  }, []);

  const fetchLeaderboard = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await axios.get(
          "http://localhost:5000/api/interview/leaderboard",
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
        "
      >
        🏆 Leaderboard
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

              <p className="font-bold text-lg">
                Rank #{index + 1}
              </p>

              <p className="mt-2">
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

        <table
          className="
          w-full
          bg-white
          rounded-xl
          shadow-lg
          overflow-hidden
          "
        >

          <thead className="bg-black text-white">

            <tr>

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
                  hover:bg-gray-50
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
                      ? "🥇 1"
                      : index === 1
                      ? "🥈 2"
                      : index === 2
                      ? "🥉 3"
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

      {/* EMPTY STATE */}

      {candidates.length === 0 && (

        <div
          className="
          text-center
          mt-10
          text-gray-500
          text-xl
          "
        >
          No Leaderboard Data Found
        </div>

      )}

    </div>

  );

}

export default Leaderboard;