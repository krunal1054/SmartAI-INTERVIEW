const { GoogleGenerativeAI } =
require("@google/generative-ai");

const genAI =
new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

exports.evaluateAnswer =
async (req, res) => {

  try {

    const {
      question,
      answer,
      field,
    } = req.body;

    const model =
    genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Evaluate this interview answer.

Field: ${field}

Question:
${question}

Answer:
${answer}

Give score out of 10 and short feedback.
`;

    const result =
    await model.generateContent(
      prompt
    );

    res.json({
      success: true,
      result:
      result.response.text(),
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message,
    });

  }

};