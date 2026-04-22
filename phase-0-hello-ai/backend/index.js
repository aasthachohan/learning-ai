const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

async function callGemini(message, retries = 5) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }],
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    const status = error.response?.status;

    if ((status === 503 || status === 429) && retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      await new Promise((res) => setTimeout(res, 2000));
      return callGemini(message, retries - 1);
    }

    throw error;
  }
}

app.post("/api/chat", async (req, res) => {
  try {
    const text = await callGemini(req.body.message);
    res.json({ reply: text });
  } catch (error) {
    res.status(500).json({
      error: "Failed to connect to Gemini",
      details: error.response?.data || error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("backend running");
});
