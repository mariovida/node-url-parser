const fs = require("fs");

function parseFile(fileContent) {
  const urls = [];
  let isInsideBrackets = false;
  let currentContent = "";
  let escapeNext = false;

  const normalizedContent = fileContent.replace(/\s+/g, " ");

  for (let i = 0; i < fileContent.length; i++) {
    const char = normalizedContent[i];

    // Handling escape character
    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === "\\") {
      escapeNext = true;
      continue;
    }

    if (char === "[" && !isInsideBrackets) {
      isInsideBrackets = true;
      currentContent = "";
      continue;
    }

    if (char === "]" && isInsideBrackets) {
      isInsideBrackets = false;
      // Extracting the last URL if there are multiple
      const urlsInBrackets = currentContent.match(
        /(https?:\/\/[^\s]+|www\.[^\s]+)/g
      );
      if (urlsInBrackets) {
        urls.push(urlsInBrackets[urlsInBrackets.length - 1]); // Pushing the last URL
      }
      continue;
    }

    if (isInsideBrackets) {
      currentContent += char;
    }
  }

  return urls;
}

module.exports = { parseFile };
