const fs = require("fs");
const path = require("path");
const { chunkingText } = require("../utils/chunking.utils");

const knowledgeFilePath = path.join(__dirname, "../data/knowledge-source.txt");

function getRelevantChunks(query) {
  const textInStoredFile = fs.readFileSync(knowledgeFilePath, "utf-8");
  const convertTextIntoChunks = chunkingText(textInStoredFile);
  const filteredText = convertTextIntoChunks.filter((chunk) => {
    chunk.toLowerCase().includes(query.toLowerCase());
  });
  return filteredText;
}

module.exports = { getRelevantChunks };
