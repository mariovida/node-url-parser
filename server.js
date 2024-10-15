const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { parseFile } = require("./src/urlParser");
const { handleUrls } = require("./src/requestHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Setting up multer for file uploads
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));

// Endpoint to handle file uploads
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Reading the uploaded file
  const filePath = req.file.path;
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const urls = parseFile(fileContent);
    if (!Array.isArray(urls) || urls.length === 0) {
      console.error("No valid URLs found in the file.");
      return res.status(400).send("No valid URLs found in the file.");
    }

    const results = await handleUrls(urls);

    res.json(results);
  } catch (error) {
    res.status(500).send(`Error processing file: ${error.message}`);
  } finally {
    // Removing the file after processing
    fs.unlinkSync(filePath);
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
