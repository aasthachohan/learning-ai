import express from "express";
import { getResponseUsingLangchain } from "../services/langChain.service.js";

const router = express.Router();
router.post("/", getResponseUsingLangchain);

export default router;