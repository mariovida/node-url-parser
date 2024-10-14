require("dotenv").config();
const fs = require("fs");
const { parseFile } = require("./urlParser");
const { handleUrls } = require("./requestHandler");

async function main() {
  const filePath = process.argv[2]; // Getting the file path from command-line arguments
  let urls;

  if (filePath) {
    // If a file path is provided, reading URLs from the file
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      urls = parseFile(fileContent); // Parsing the file content to extract URLs
    } catch (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }
  } else {
    // If no file path is provided, reading from stdin
    let input = "";
    process.stdin.on("data", (chunk) => {
      input += chunk;
      if (input.includes("END")) {
        // Removing everything after and including the keyword "END"
        input = input.substring(0, input.indexOf("END")).trim();
        process.stdin.pause(); // Reading from stdin stopeed
      }
    });

    process.stdin.on("end", async () => {
      if (input) {
        // Ensuring there's input to process
        urls = parseFile(input); // Parsing the input
        await handleUrls(urls); // Handling the URLs
      }
      process.exit(0);
    });

    process.stdin.on("error", (error) => {
      console.error(`Error reading from stdin: ${error.message}`);
      process.exit(1);
    });
  }

  // Handling URLs if reading from a file
  if (urls) {
    await handleUrls(urls);
  }
}

main();
