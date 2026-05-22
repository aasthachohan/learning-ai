import express from "express";
import dotenv from "dotenv";
import cors from  "cors";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/chat", chatRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Phase 3 server is running...");
})