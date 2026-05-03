const fs = require("fs");
const path = require("path");
const { chunkingText } = require("../utils/chunking.utils");

const knowledgeFilePath = path.join(__dirname, "../data/knowledge-source.txt");

function getRelevantChunks(userQuery) {
  const storedFileText = fs.readFileSync(knowledgeFilePath, "utf-8");
  const storedFileChunks = chunkingText(storedFileText);

  const finalUserInputWordsArray =
    userQuery.toLowerCase().match(/\b(\w{3,})\b/g) || [];

  return storedFileChunks.filter((chunk) =>
    finalUserInputWordsArray.some((userInputWord) =>
      chunk.toLowerCase().includes(userInputWord)
    )
  );
}

module.exports = { getRelevantChunks };
