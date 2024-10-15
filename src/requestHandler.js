const axios = require("axios");
const crypto = require("crypto");
const { delay } = require("./utils");
require("dotenv").config();

function logError(message) {
  if (process.env.ERROR_LOG === "true") {
    console.error(message); // Logging error if ERROR_LOG is set to true
  }
}

async function handleRequest(url) {
  // If the URL starts with 'www.', transforming it to 'https://'
  if (url.startsWith("www.")) {
    url = `https://${url.slice(4)}`;
  }

  try {
    const response = await axios.get(url); // Making the HTTP GET request
    return response;
  } catch (error) {
    logError(`Error fetching ${url}: ${error.message}`);

    // Retrying again after one minute
    logError(`Retrying ${url} in 1 minute...`);
    // HINT: Change delay to 2000 for testing
    await delay(60000); // Wait for 1 minute

    try {
      const retryResponse = await axios.get(url); // Retrying the request
      return retryResponse;
    } catch (retryError) {
      console.error(`Second attempt failed for ${url}: ${retryError.message}`);
      return null; // Returning null if the second attempt fails too
    }
  }
}

async function handleUrls(urls) {
  const seenUrls = new Set(); // Tracking processed URLs
  const results = []; // Storing results

  for (const url of urls) {
    if (seenUrls.has(url)) {
      continue; // Skipping duplicate URLs
    }
    seenUrls.add(url);

    const response = await handleRequest(url);
    if (!response) continue; // Skipping if response is null

    const titleMatch = response.data.match(/<title[^>]*>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : undefined;

    const emailMatch = response.data.match(
      /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/
    );
    let emailHash;

    if (emailMatch) {
      const email = emailMatch[0];
      if (!process.env.IM_SECRET) {
        logError("IM_SECRET is not defined. Cannot hash email.");
        return;
      }
      const hash = crypto
        .createHmac("sha256", process.env.IM_SECRET)
        .update(email)
        .digest("hex");
      emailHash = hash; // Storing hashed email
    }

    // Preparing the output
    const result = { url };
    if (title) result.title = title;
    if (emailHash) result.email = emailHash;

    // Logging the result in JSON format
    console.log(JSON.stringify(result));
    results.push(result);

    // Adding 1-second delay between requests
    await delay(1000);
  }
  return results;
}

module.exports = { handleRequest, handleUrls };
