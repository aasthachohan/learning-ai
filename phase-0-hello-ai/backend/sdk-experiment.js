// NOTE:
// This file contains initial SDK-based attempt using @google/generative-ai.
// It failed due to v1beta vs v1 API mismatch.
// Final working implementation uses REST API (axios) in index.js.

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors"); // need this for Angular to talk to Express
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// dotenv.config(); // loads .env file

// const app = express();
// app.use(express.json());
// app.use(cors()); // allows Angular app (port 4200) to talk to this API (port 3000)

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post("/api/chat", async (req, res) => {
//   console.log("📩 Received message from client:", req.body.message);

//   try {
//     const modelName = "gemini-1.5-flash";
//     console.log("Using model:", modelName);
//     const model = genAI.getGenerativeModel({ model: modelName });

//     console.log("🤖 Sending request to Gemini...");
//     const result = await model.generateContent(req.body.message);

//     console.log("✅ Received response from Gemini!");
//     const response = await result.response;
//     const text = response.text();

//     res.json({ reply: text });
//   } catch (error) {
//     console.error("❌ Gemini Error:", error.message);
//     res
//       .status(500)
//       .json({ error: "Failed to connect to Gemimni", details: error.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`express backend is runnning on PORT ${PORT}`);
// });
