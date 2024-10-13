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

### Getting Started

To get started with this project, please refer to the [Usage Instructions](usage.md).
