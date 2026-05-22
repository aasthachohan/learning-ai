// This file only does the following 5 things and nothing else -
// Read source text
// Split into chunks
// Create context
// Build prompt
// Call Gemini via LangChain
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import geminiModel from "../config/gemini.config.js";
import chatPrompt from "../prompt/chat.prompt.js";
import { splitText } from "../utils/textSplitter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getResponseUsingLangchain(req, res) {
    try {
        const { requestedMessage } = req.body;
        const filePath = path.join(__dirname, "../data/knowledgeSource.txt");
        const sourceText = await fs.readFile(filePath, 'utf-8');
        const chunks = await splitText(sourceText);
        const context = chunks.join('\n');
        const finalPrompt = await chatPrompt.format({context: context, question: requestedMessage});
        const invokeModelAndReceiveResponse = await geminiModel.invoke(finalPrompt);
        return res.json({
            answer: invokeModelAndReceiveResponse.content
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: error.requestedMessage
        });
    }
}