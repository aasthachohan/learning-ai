const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

dotenv.config();

const PORT = process.env.PORT || 3000;
const expressApp = express();
expressApp.use(express.json());
expressApp.use(cors());

expressApp.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Kindly provide input message" });
  }
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const reply = extractTextFromGemini(response.data);
    res.json({ reply });
  } catch (error) {
    console.error(
      "Error calling Gemini API:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

expressApp.listen(PORT, () => {
  console.log("Phase 1 express server running...");
});

function extractTextFromGemini(data) {
  return (
    data?.candidates?.[0]?.content?.parts?.map((part) => part.text)?.join("") ||
    "No response from model"
  );
}
