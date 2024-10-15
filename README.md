# URL Parser application

This is a Node.js-based application that processes text files containing URLs. It parses these URLs to extract information such as page titles and email addresses. The results are displayed in a structured format via the command line for easy viewing. Additionally, the application also includes a web interface that allows users to upload `.txt` files for URL parsing.

![Web interface screenshot](web_interface.png)
<em>Web interface screenshot (Running the application -> 3. Web usage)</em>

### Technologies

- **Node.js**: JavaScript runtime for building the server.
- **Axios**: Promise-based HTTP client for making requests to URLs.
- **Crypto**: Built-in module for hashing email addresses.
- **Express.js**: Web framework for handling HTTP requests.
- **Multer**: Middleware for handling file uploads.

<hr/>

### ⚙️ Installation

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
   Create a .env file in the root of the project:

   ```bash
   IM_SECRET=secret_key
   PORT=3000
   ERROR_LOG=true # Set to true to enable error logging in the console, false or omit to disable
   ```

💡 Errors can be displayed in the console if the environment variable `ERROR_LOG=true` is set.

<hr/>

### 🚀 Running the application

### ️1. Direct command-line usage

Place the `.txt` file (e.g., `testing_urls.txt`) in the root directory or any accessible directory and run the following command:

    node src/parser.js path/to/testing_urls.txt

The application will process the specified file and output the results directly to the console.

### ️2. Direct command-line usage

If no arguments are provided to the script (no path to the file), the application will read input from the standard input (stdin) stream. For example, you can run:

    echo "[https://example.com] [www.google.com]" | node src/parser.js

### ️3. Web usage (Extra case - added for user convenience)

1. **Start the server:**

   ```bash
   node server.js
   ```

2. **Open web browser and navigate to http://localhost:3000**

3. **Upload a `.txt` file using the web interface that contains URLs formatted like this:**

A sample file (`testing-urls.txt`) is provided in the root of the project for <b>testing purposes</b>. It contains various cases of URLs and escaped characters to help quickly test the application.

The application will parse the uploaded file, make HTTP requests to the URLs and display the results in a structured format on the web page.

<hr/>

### 🧪 Testing

This project uses **Jest** as the testing framework to ensure the functionality and reliability of the URL Parser application.

To run the test suite, execute the following command in terminal:

```bash
npx jest
```

Jest will run the tests and output the results in the terminal. If all tests pass, a summary indicating success will be displayed. If any tests fail, Jest will provide details about the failed tests, including error messages and stack traces.

The `tests/parser.test.js` file contains <b>unit tests for the URL parsing functionality</b>. These tests ensure that valid URLs are correctly extracted from input strings and that edge cases are handled properly.

The `tests/integration.test.js` file includes <b>integration test that verifies the overall functionality of the application</b>, simulating how the application will behave when processing real input. This test checks for correct URL parsing and error handling when invalid URL is encountered.
