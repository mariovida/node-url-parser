# URL Parser Application

## Overview

This is a Node.js-based web application that allows users to upload text files containing URLs. The application parses these URLs to extract information such as page titles and email addresses. The results are presented in a structured format, making it easy for users to view and analyze the data.

### Key Features

- **File Upload**: Users can upload `.txt` files containing URLs.
- **URL Parsing**: Automatically extracts URLs from the uploaded files.
- **HTTP Requests**: Makes HTTP requests to the URLs to retrieve titles and email addresses.
- **Structured Output**: Returns results in a clean, readable format.
- **Error Handling**: Gracefully handles errors related to file uploads, invalid URLs, and HTTP requests.

### Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling HTTP requests.
- **Multer**: Middleware for handling file uploads.
- **Axios**: Promise-based HTTP client for making requests to URLs.
- **Crypto**: Built-in module for hashing email addresses.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment:**
   Create a .env file in the root of your project:

   ```bash
   IM_SECRET=secret_key
   ```

### Running the application

1. **Start the server:**

   ```bash
   node server.js
   ```

2. **Open web browser and navigate to http://localhost:3000**
