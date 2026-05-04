const express = require("express");
const router = express.Router();

const { getRelevantChunks } = require("../services/rag.service");
const { callLLM } = require("../services/llm.service");

router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message;
    const chunks = getRelevantChunks(userMessage);
    const context = chunks.join("\n");

    const prompt = `You must answer ONLY from the context below.
    If the answer is not present, reply with "I don't know".
    Context: ${context}
    Question: ${userMessage}
    `;

    const reply = await callLLM(prompt);
    res.json({ reply });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      return res.status(429).json({
        error: err.message,
        details: err.response?.data
      });
    }
    res.status(500).json({
      error: err.message,
      details: err.response?.data,
    });
  }
});

module.exports = router;
