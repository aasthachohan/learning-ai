const axios = require("axios");

async function callLLM(prompt) {
  const url = `${process.env.LLM_BASE_URL}?key=${process.env.LLM_API_KEY}`;
  const res = await axios.post(url, {
    contents: [{ parts: [{ text: prompt }] }],
  });
  return res.data.candidates[0].content.parts[0].text;
}

module.exports = { callLLM };
