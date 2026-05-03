// splitting of text
function chunkingText(text, chunkSize = 100) {
  const chunksArray = [];
  for (let i = 0; i < text.length; i = i + chunkSize) {
    chunksArray.push(text.slice(i, i + chunkSize));
  }
  return chunksArray;
}

module.exports = { chunkingText };
