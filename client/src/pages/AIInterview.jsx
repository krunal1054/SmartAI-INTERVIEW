/*import { useEffect, useState } from "react";

function AIInterview() {

  const questions = [

    {
      question:
        "What is React JS?",
      options: [
        "Database",
        "Frontend Library",
        "Backend Framework",
        "Language",
      ],
      answer:
        "Frontend Library",
    },

    {
      question:
        "What is useState Hook?",
      options: [
        "Database",
        "React Hook",
        "API",
        "CSS",
      ],
      answer:
        "React Hook",
    },

    {
      question:
        "What is MongoDB?",
      options: [
        "Frontend",
        "Database",
        "Library",
        "API",
      ],
      answer:
        "Database",
    },

    {
      question:
        "What is Express JS?",
      options: [
        "Backend Framework",
        "Database",
        "Language",
        "Design Tool",
      ],
      answer:
        "Backend Framework",
    },

    {
      question:
        "What is Node JS?",
      options: [
        "Runtime",
        "Database",
        "Library",
        "Design Tool",
      ],
      answer:
        "Runtime",
    },

  ];




  const [currentQuestion,
    setCurrentQuestion] =
    useState(0);

  const [score,
    setScore] =
    useState(0);

  const [showResult,
    setShowResult] =
    useState(false);

  const [timeLeft,
    setTimeLeft] =
    useState(900);




  // TIMER
  useEffect(() => {

    if (timeLeft <= 0) {

      setShowResult(true);

      return;

    }

    const timer =
      setInterval(() => {

        setTimeLeft(
          timeLeft - 1
        );

      }, 1000);




    return () =>
      clearInterval(timer);

  }, [timeLeft]);




  // CAMERA + MIC
  useEffect(() => {

    navigator.mediaDevices
      .getUserMedia({

        video: true,
        audio: true,

      })
      .then((stream) => {

        const video =
          document.getElementById(
            "video"
          );

        if (video) {

          video.srcObject =
            stream;

        }

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);




  // ANSWER
  const handleAnswer =
    (option) => {

      if (
        option ===
        questions[currentQuestion]
          .answer
      ) {

        setScore(score + 1);

      }




      const nextQuestion =
        currentQuestion + 1;




      if (
        nextQuestion <
        questions.length
      ) {

        setCurrentQuestion(
          nextQuestion
        );

      } else {

        setShowResult(true);

      }

    };




  // RESULT %
  const percentage =
    (
      (score /
        questions.length) *
      100
    ).toFixed(0);




  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">




        {/* TOP *//*}
<div className="flex justify-between items-center mb-10">

  <h1 className="text-4xl font-bold">
    AI Interview Round
  </h1>

  <div className="bg-red-500 text-white px-5 py-2 rounded-lg text-xl font-bold">

    {Math.floor(
      timeLeft / 60
    )}
    :
    {String(
      timeLeft % 60
    ).padStart(2, "0")}

  </div>

</div>




{/* CAMERA *//*}
<div className="mb-10">

  <video
    id="video"
    autoPlay
    muted
    className="w-[300px] rounded-lg border"
  />

</div>




{/* RESULT *//*}
{showResult ? (

  <div className="text-center">

    <h2 className="text-5xl font-bold mb-5">
      Interview Result
    </h2>

    <p className="text-3xl mb-5">
      Score :
      {" "}
      {percentage}%
    </p>




    {percentage >= 75 ? (

      <div>

        <h1 className="text-5xl font-bold text-green-500 mb-5">
          PASS ✅
        </h1>

        <p className="text-xl">
          Congratulations!
          You cleared the AI Interview.
        </p>

      </div>

    ) : (

      <div>

        <h1 className="text-5xl font-bold text-red-500 mb-5">
          FAIL ❌
        </h1>

        <p className="text-xl">
          Better Luck Next Time
        </p>

      </div>

    )}

  </div>

) : (

  <div>

    <h2 className="text-3xl font-bold mb-10">

      Q.
      {currentQuestion + 1}
      {" "}
      {questions[currentQuestion]
        .question}

    </h2>




    <div className="grid grid-cols-2 gap-5">

      {questions[
        currentQuestion
      ].options.map(
        (option, index) => (

          <button
            key={index}
            onClick={() =>
              handleAnswer(
                option
              )
            }
            className="bg-black text-white p-5 rounded-lg hover:bg-gray-800 text-xl"
          >
            {option}
          </button>

        )
      )}

    </div>

  </div>

)}

</div>

</div>

);
}

export default AIInterview;*/

import { useEffect, useState } from "react";
import axios from "axios";
import { interviewQuestions } from "../data/interviewQuestions";
import toast from "react-hot-toast";
import jsPDF from "jspdf";

function AIInterview() {

  const [step, setStep] = useState("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("MERN Stack");

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const voiceQuestions = [

  "Explain React Hooks",

  "Difference between useState and useEffect",

  "Explain Virtual DOM",

  "What is Redux",

  "Explain JWT Authentication",

  "What is Middleware",

  "Explain MongoDB Indexing",

  "Explain REST API",

  "What is Tailwind CSS",

  "Tell me about a MERN project"

];
  const [timeLeft, setTimeLeft] = useState(900);

  const [showResult, setShowResult] = useState(false);

  const [interviewId, setInterviewId] = useState("");

  const [voiceRound, setVoiceRound] =
    useState(false);

  const [voiceQuestionIndex,
    setVoiceQuestionIndex] =
    useState(0);

  const [voiceScore,
    setVoiceScore] =
    useState(0);

    const [finalScore,
  setFinalScore] =
  useState(0);


  const [spokenAnswer,
    setSpokenAnswer] =
    useState("");

  const [listening,
    setListening] =
    useState(false);

    const [cameraAllowed,
  setCameraAllowed] =
  useState(false);
  const checkCamera = async () => {

  try {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

    const video =
      document.getElementById("video");

    if (video) {
      video.srcObject = stream;
    }

    setCameraAllowed(true);

  } catch (error) {

    setCameraAllowed(false);

    alert(
      "Camera & Microphone Required For Voice Round"
    );

  }

};

  const [warnings, setWarnings] =
useState(0);
const [feedback,
setFeedback] =
useState("");

useEffect(() => {

  const handleVisibility = () => {

    if (document.hidden) {

      setWarnings(prev => prev + 1);

    }

  };

  document.addEventListener(
    "visibilitychange",
    handleVisibility
  );

  return () =>
    document.removeEventListener(
      "visibilitychange",
      handleVisibility
    );

}, []);
    

  // TIMER
  useEffect(() => {

    if (step !== "mcq") return;

    if (timeLeft <= 0) {

      setShowResult(true);

      return;

    }

    const timer = setInterval(() => {

      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, step]);


  useEffect(() => {

  if (
    voiceRound &&
    voiceQuestions[
      voiceQuestionIndex
    ]
  ) {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        voiceQuestions[
          voiceQuestionIndex
        ]
      );

    speech.lang = "en-US";
    speech.rate = 1;

    window.speechSynthesis.speak(
      speech
    );

  }

}, [
  voiceQuestionIndex,
  voiceRound
]);

  const startInterview = async () => {
try {

  const stream =
await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});

const video =
document.getElementById("video");

if (video) {
  video.srcObject = stream;
}

} catch (error) {

  alert(
    "Camera & Microphone Permission Required"
  );

  return;

}

    if (!name || !email) {

      alert("Please fill all fields");

      return;

    }

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.post(
          "http://localhost:5000/api/interview/start",
          {
            name,
            email,
            field,
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setInterviewId(
        res.data.interview._id
      );

    setQuestions(
  interviewQuestions[field]
);



      setStep("mcq");

    } catch (error) {

      console.log(error);
      console.log(
    error.response?.data
  );

      alert(
        error.response?.data?.message ||
        "Failed To Start Interview"
      );

    }

  };



  // ANSWER
  const handleAnswer = (option) => {

    if (
      option ===
      questions[currentQuestion].answer
    ) {

      setScore((prev) => prev + 1);

    }

    const nextQuestion =
      currentQuestion + 1;

    if (
      nextQuestion <
      questions.length
    ) {

      setCurrentQuestion(
        nextQuestion
      );

    } else {

   setVoiceRound(true);

checkCamera();

    }

  };
const startListening = () => {

  console.log("Start Listening Clicked");

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported");
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  setListening(true);

  recognition.start();

  recognition.onstart = () => {
    console.log("Mic Started");
  };

  recognition.onresult = (event) => {

    console.log("Speech Detected");

    const transcript =
      event.results[0][0].transcript;

    console.log(
      "Transcript:",
      transcript
    );

    setSpokenAnswer(
      transcript
    );
  };

  recognition.onerror = (event) => {

    console.log(
      "Speech Error:",
      event.error
    );

    setListening(false);
  };

  recognition.onend = () => {

    console.log("Mic Ended");

    setListening(false);
  };
};

const evaluateVoiceAnswer = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const res =
      await axios.post(
        "http://localhost:5000/api/interview/evaluate",
        {
          question:
            voiceQuestions[
              voiceQuestionIndex
            ],
          answer:
            spokenAnswer,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    const score =
      parseInt(res.data.score);

    setVoiceScore(
      prev => prev + score
    );

    return score;

  } catch (error) {

    console.log(error);

    return 0;
  }
};
  const nextVoiceQuestion = async () => {

  if (!cameraAllowed) {

    alert(
      "Camera & Microphone Required"
    );

    return;

  }

    window.speechSynthesis.cancel();

const currentScore =
await evaluateVoiceAnswer();

    if (
      voiceQuestionIndex <
      voiceQuestions.length - 1
    ) {

      setVoiceQuestionIndex(
        voiceQuestionIndex + 1
      );
      setSpokenAnswer("");

    } else {

      const mcqScore =
        Number(percentage);

     const totalVoiceScore =
voiceScore + currentScore;

const voicePercentage =
(
 (totalVoiceScore / 100) * 100
).toFixed(0);
     /* const voicePercentage =
(
  (voiceScore / 250) * 100
);*/
/*
      const finalScore =
        Math.round(
          (mcqScore +
            voicePercentage) / 2
        );*/
   const calculatedFinalScore =
Math.round(
(
 Number(mcqScore) +
 Number(voicePercentage)
) / 2
);

setFinalScore(
  calculatedFinalScore
);
/*
      const result =
        finalScore >= 75
          ? "PASS"
          : "FAIL";*/

          const result =
  calculatedFinalScore >= 75
    ? "PASS"
    : "FAIL";

      const token =
        localStorage.getItem(
          "token"
        );

await axios.post(
  "http://localhost:5000/api/interview/save-result",
  {
    interviewId,
    round1Score: mcqScore,
    round2Score: voicePercentage,
    finalScore: calculatedFinalScore,
    result,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
/*
const feedbackRes =
await axios.post(
  "http://localhost:5000/api/interview/feedback",
  {
    field,
    mcqScore,
    voiceScore: voicePercentage,
    finalScore: calculatedFinalScore,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

setFeedback(
  feedbackRes.data.feedback
);
*/
const video =
  document.getElementById("video");

if (video && video.srcObject) {

  const tracks =
    video.srcObject.getTracks();

  tracks.forEach(track =>
    track.stop()
  );

  video.srcObject = null;

}

console.log("RESULT PAGE OPEN");

      setShowResult(true);

    }

  };

  
  const percentage =
    questions.length > 0
      ? (
        (score /
          questions.length) *
        100
      ).toFixed(0)
      : 0;

      const downloadReport = () => {

  if (!interviewId) {

    alert("Interview Result Not Found");

    return;

  }

  window.open(

    `http://localhost:5000/api/interview/pdf/${interviewId}`,

    "_blank"

  );

};

  const saveResult = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const finalScore =
        Number(percentage);

      const result =
        finalScore >= 75
          ? "PASS"
          : "FAIL";

      await axios.post(

        "http://localhost:5000/api/interview/save-result",

        {
          interviewId,

          round1Score:
            finalScore,

          round2Score: 0,

          finalScore,

          result,

        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        "Interview Result Saved"
      );

    } catch (error) {

      console.log(error);

    }

  };


/*
  // FORM PAGE
  if (step === "form") {

    return (

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-10 rounded-xl shadow-lg w-[500px]">

          <h1 className="text-4xl font-bold mb-6 text-center">
            AI Interview Registration
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border p-3 w-full mb-4 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-3 w-full mb-4 rounded"
          />

          <select
            value={field}
            onChange={(e) =>
              setField(e.target.value)
            }
            className="border p-3 w-full mb-4 rounded"
          >
            <option>MERN Stack</option>
            <option>Full Stack</option>
            <option>WordPress</option>
            <option>UI/UX Design</option>
            <option>AI/ML</option>
          </select>


          <button
            onClick={startInterview}
            className="bg-black text-white w-full p-3 rounded"
          >
            Start AI Interview
          </button>

        </div>

      </div>

    );

  }



  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold">
            AI Interview
          </h1>

          <div className="bg-red-500 text-white px-5 py-2 rounded-lg font-bold">

            {Math.floor(timeLeft / 60)}:
            {String(
              timeLeft % 60
            ).padStart(2, "0")}

          </div>

        </div>



        <div className="mb-8">

          <video
            id="video"
            autoPlay
            muted
            className="w-[300px] rounded-lg border"
          />


        </div>
{voiceRound && !showResult ? (

  !cameraAllowed ? (

    <div className="text-center">
      <h1 className="text-red-500 text-3xl font-bold">
        Camera & Microphone Required
      </h1>
    </div>

  ) : (

          <div className="text-center">

            <h1 className="text-4xl font-bold mb-10">
              Voice Interview Round
            </h1>
            <h3 className="text-xl font-bold mb-5">
  Voice Question {voiceQuestionIndex + 1} / {voiceQuestions.length}
</h3>

            <h2 className="text-2xl mb-10">
              {voiceQuestions[voiceQuestionIndex]}
            </h2>

            <textarea
              value={spokenAnswer}
              onChange={(e) =>
                setSpokenAnswer(e.target.value)
              }
              className="border w-full p-5 mb-5"
              rows="6"
            />
<button
  onClick={startListening}
  className="bg-green-500 text-white px-5 py-2 rounded"
>

  {listening
    ? "Listening..."
    : "Start Speaking"}

</button>

            <button
              onClick={nextVoiceQuestion}
              className="bg-black text-white px-8 py-3 rounded"
            >
              Next Question
            </button>

          </div>
  )

) : showResult ? (

  <div className="text-center">

    <h1 className="text-5xl font-bold mb-5">
      Interview Result
    </h1>

    <h2 className="text-3xl font-bold mb-5">
      {finalScore >= 75
        ? "🎉 Congratulations! You have cracked the interview."
        : "Thank you for attending the interview."}
    </h2>

    <p className="text-xl mb-5">
      Interview result has been sent to your email.
    </p>

    <p className="text-2xl">
      MCQ Score : {percentage}%
    </p>

    <p className="text-2xl">
      Voice Score :
      {Math.round((voiceScore / 100) * 100)}%
    </p>
<p className="text-xl">
Raw Voice Score :
{voiceScore}
</p>

    <p className="text-3xl font-bold mt-5">
      Final Score : {finalScore}%
    </p>

    <div className="mt-5">

      {finalScore >= 75 ? (

        <h1 className="text-green-500 text-5xl font-bold">
          PASS ✅
        </h1>

      ) : (

        <h1 className="text-red-500 text-5xl font-bold">
          FAIL ❌
        </h1>

      )}
      <div className="mt-10">

  <h2 className="text-3xl font-bold mb-5">

    AI Feedback Report

  </h2>

  <pre className="bg-gray-100 p-5 rounded text-left whitespace-pre-wrap">

    {feedback}

  </pre>

</div>
      <button
  onClick={downloadReport}
  className="bg-blue-600 text-white px-6 py-3 rounded mt-5"
>
  Download PDF Report
</button>

    </div>

  </div>

) : (

          questions.length > 0 && (

            <div>
              <h3 className="text-xl font-bold mb-4">
  Question {currentQuestion + 1} / {questions.length}
</h3>

              <h2 className="text-3xl font-bold mb-10">

                Q.{currentQuestion + 1}{" "}
                {
                  questions[
                    currentQuestion
                  ].question
                }

              </h2>

              <div className="grid grid-cols-2 gap-5">

                {questions[
                  currentQuestion
                ].options.map(
                  (
                    option,
                    index
                  ) => (

                    <button
                      key={index}
                      onClick={() =>
                        handleAnswer(
                          option
                        )
                      }
                      className="bg-black text-white p-5 rounded-lg hover:bg-gray-800"
                    >
                      {option}
                    </button>

                  )
                )}

              </div>

            </div>

          )

        )}

      </div>

    </div>

  );

}

export default AIInterview;*/


  // FORM PAGE
  if (step === "form") {

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-xl shadow-lg w-full max-w-lg">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
          AI Interview Registration
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-3 w-full mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-3 w-full mb-4 rounded"
        />

        <select
          value={field}
          onChange={(e) =>
            setField(e.target.value)
          }
          className="border p-3 w-full mb-4 rounded"
        >
          <option>MERN Stack</option>
          <option>Full Stack</option>
          <option>WordPress</option>
          <option>UI/UX Design</option>
          <option>AI/ML</option>
        </select>

        <button
          onClick={startInterview}
          className="bg-black text-white w-full p-3 rounded"
        >
          Start AI Interview
        </button>

      </div>

    </div>

  );

}

return (

  <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">

    <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 lg:p-10 rounded-xl shadow-lg">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          AI Interview
        </h1>

        <div className="bg-red-500 text-white px-5 py-2 rounded-lg font-bold">

          {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}

        </div>

      </div>

      <div className="mb-8 flex justify-center">

        <video
          id="video"
          autoPlay
          muted
          className="
          w-full
          max-w-sm
          rounded-lg
          border
          "
        />

      </div>

 
{voiceRound && !showResult ? (

  !cameraAllowed ? (

    <div className="text-center">
      <h1 className="text-red-500 text-3xl font-bold">
        Camera & Microphone Required
      </h1>
    </div>

  ) : (

         <div className="text-center">

  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
    Voice Interview Round
  </h1>

  <h3 className="text-lg sm:text-xl font-bold mb-5">
    Voice Question {voiceQuestionIndex + 1} / {voiceQuestions.length}
  </h3>

  <h2 className="text-xl sm:text-2xl mb-8">
    {voiceQuestions[voiceQuestionIndex]}
  </h2>

  <textarea
    value={spokenAnswer}
    onChange={(e) =>
      setSpokenAnswer(e.target.value)
    }
    className="border w-full p-4 mb-5 rounded"
    rows="6"
  />

  <div className="flex flex-col sm:flex-row justify-center gap-4">

    <button
      onClick={startListening}
      className="bg-green-500 text-white px-5 py-3 rounded"
    >
      {listening
        ? "Listening..."
        : "Start Speaking"}
    </button>

    <button
      onClick={nextVoiceQuestion}
      className="bg-black text-white px-8 py-3 rounded"
    >
      Next Question
    </button>

  </div>

</div>
  )

) : showResult ? (

  <div className="text-center">

  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
    Interview Result
  </h1>

  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5">
    {finalScore >= 75
      ? "🎉 Congratulations! You have cracked the interview."
      : "Thank you for attending the interview."}
  </h2>

  <p className="text-lg sm:text-xl mb-5">
    Interview result has been sent to your email.
  </p>

  <p className="text-lg sm:text-2xl">
    MCQ Score : {percentage}%
  </p>

  <p className="text-lg sm:text-2xl">
    Voice Score :
    {Math.round((voiceScore / 100) * 100)}%
  </p>

  <p className="text-lg sm:text-xl">
    Raw Voice Score : {voiceScore}
  </p>

  <p className="text-2xl sm:text-3xl font-bold mt-5">
    Final Score : {finalScore}%
  </p>

    <div className="mt-5">

      {finalScore >= 75 ? (

        <h1 className="text-green-500 text-5xl font-bold">
          PASS ✅
        </h1>

      ) : (

        <h1 className="text-red-500 text-5xl font-bold">
          FAIL ❌
        </h1>

      )}
      <div className="mt-10">

  <h2 className="text-3xl font-bold mb-5">

    AI Feedback Report

  </h2>

  <pre className="bg-gray-100 p-5 rounded text-left whitespace-pre-wrap">

    {feedback}

  </pre>

</div>
      <button
  onClick={downloadReport}
  className="bg-blue-600 text-white px-6 py-3 rounded mt-5"
>
  Download PDF Report
</button>

    </div>

  </div>

) : (

          questions.length > 0 && (

            <div>
              <h3 className="text-xl font-bold mb-4">
  Question {currentQuestion + 1} / {questions.length}
</h3>

              <h2 className="text-3xl font-bold mb-10">

                Q.{currentQuestion + 1}{" "}
                {
                  questions[
                    currentQuestion
                  ].question
                }

              </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

  {questions[currentQuestion].options.map(
    (option, index) => (

      <button
        key={index}
        onClick={() =>
          handleAnswer(option)
        }
        className="
        bg-black
        text-white
        p-4
        rounded-lg
        hover:bg-gray-800
        "
      >
        {option}
      </button>

    )
  )}

</div>

            </div>

          )

        )}

      </div>

    </div>

  );

}

export default AIInterview;