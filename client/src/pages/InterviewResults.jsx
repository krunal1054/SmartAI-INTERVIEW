import { useEffect, useState } from "react";
import axios from "axios";

function InterviewResults() {

  const [results, setResults] =
    useState([]);

  useEffect(() => {

    fetchResults();

  }, []);

  const fetchResults = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.get(
          "http://localhost:5000/api/interview/results",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setResults(
        res.data.interviews
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
      py-6
      "
    >

      {/* Heading */}

      <h1
        className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        mb-8
        "
      >
        Interview Results
      </h1>

      {/* MOBILE VIEW */}

      <div className="block lg:hidden space-y-5">

        {results.map((item) => (

          <div
            key={item._id}
            className="
            bg-white
            p-5
            rounded-xl
            shadow-lg
            "
          >

            <p>
              <strong>Name:</strong>{" "}
              {item.name}
            </p>

            <p className="mt-2 break-words">
              <strong>Email:</strong>{" "}
              {item.email}
            </p>

            <p className="mt-2">
              <strong>Field:</strong>{" "}
              {item.field}
            </p>

            <p className="mt-2">
              <strong>MCQ:</strong>{" "}
              {item.round1Score}%
            </p>

            <p className="mt-2">
              <strong>Voice:</strong>{" "}
              {item.round2Score}%
            </p>

            <p className="mt-2">
              <strong>Final:</strong>{" "}
              {item.finalScore}%
            </p>

            <p className="mt-2">

              <strong>Result:</strong>{" "}

              {item.result === "PASS" ? (

                <span className="text-green-600 font-bold">
                  PASS
                </span>

              ) : (

                <span className="text-red-600 font-bold">
                  FAIL
                </span>

              )}

            </p>

            <p className="mt-2">
              <strong>Date:</strong>{" "}
              {new Date(
                item.createdAt
              ).toLocaleDateString()}
            </p>

          </div>

        ))}

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
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Field
              </th>

              <th className="p-4">
                MCQ
              </th>

              <th className="p-4">
                Voice
              </th>

              <th className="p-4">
                Final
              </th>

              <th className="p-4">
                Result
              </th>

              <th className="p-4">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {results.map((item) => (

              <tr
                key={item._id}
                className="
                border-b
                text-center
                hover:bg-gray-50
                "
              >

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.field}
                </td>

                <td className="p-4">
                  {item.round1Score}%
                </td>

                <td className="p-4">
                  {item.round2Score}%
                </td>

                <td className="p-4 font-bold">
                  {item.finalScore}%
                </td>

                <td className="p-4">

                  {item.result === "PASS" ? (

                    <span className="text-green-600 font-bold">
                      PASS
                    </span>

                  ) : (

                    <span className="text-red-600 font-bold">
                      FAIL
                    </span>

                  )}

                </td>

                <td className="p-4">
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default InterviewResults;