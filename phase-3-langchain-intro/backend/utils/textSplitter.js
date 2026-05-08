// LANGCHAIN SPLITTER LOGIC
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100
});

export async function splitText(document) {
    return await textSplitter.splitText(document);
}