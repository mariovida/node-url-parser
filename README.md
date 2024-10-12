# URL Parser Application

## Overview

This is a Node.js-based web application that allows users to upload text files containing URLs. The application parses these URLs to extract information such as page titles and email addresses. The results are presented in a structured format, making it easy for users to view and analyze the data.

### Features

- **File upload**: Users can upload `.txt` files containing URLs.
- **URL parsing**: Automatically extracts URLs from the uploaded files.
- **HTTP requests**: Makes HTTP requests to the URLs to retrieve titles and email addresses.
- **Structured output**: Returns results in a readable format.
- **Error handling**: Gracefully handles errors related to file uploads, invalid URLs, and HTTP requests.

### Technologies

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling HTTP requests.
- **Multer**: Middleware for handling file uploads.
- **Axios**: Promise-based HTTP client for making requests to URLs.
- **Crypto**: Built-in module for hashing email addresses.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mariovida/node-url-parser.git
   cd node-url-parser
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment:**
   Create a .env file in the root of your project:

   ```bash
   IM_SECRET=secret_key
   PORT=3000
   ```

## ⚡ Running the application

### ◻️ Direct Command-Line Usage

Place the `.txt` file (e.g., `testing_urls.txt`) in the root directory or any accessible directory and run the following command:

    node src/parser.js path/to/testing_urls.txt

The application will process the specified file and output the results directly to the console.

### ◻️ Web Interface Usage

1. **Start the server:**

   ```bash
   node server.js
   ```

2. **Open web browser and navigate to http://localhost:3000**

3. **Upload a `.txt` file using the web interface that contains URLs formatted like this:**

   ```bash
   [https://example.com]
   [www.google.com]
   Some random text [http://www.wikipedia.org] more text here.
   ```

The application will parse the uploaded file, make HTTP requests to the URLs and display the results in a structured format on the web page.
