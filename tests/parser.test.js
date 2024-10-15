const { parseFile } = require("../src/urlParser");

describe("URL Parser testing", () => {
  // TEST 1
  test("Parses valid URLs", () => {
    const inputText =
      "[https://example.com] Some text before the URL [www.google.com] Nested URL [Inner text [http://stackoverflow.com] more text]";

    const urls = parseFile(inputText);
    expect(urls).toEqual([
      "https://example.com",
      "www.google.com",
      "http://stackoverflow.com",
    ]);
  });

  // TEST 2
  test("Ignoring URLs", () => {
    const inputText = `
      Case with escape: \\[https://www.google.com]
      Another example with \\[http://example.com]
    `;

    const urls = parseFile(inputText);
    expect(urls).toEqual([]);
  });

  // TEST 3
  test("No URLs found", () => {
    const inputText = "This text has no valid URLs.";
    const urls = parseFile(inputText);
    expect(urls).toEqual([]);
  });

  // TEST 4
  test("Multiple valid URLs", () => {
    const inputText =
      "[https://google.com], [http://example.com] and another URL [www.github.com]";

    const urls = parseFile(inputText);
    expect(urls).toEqual([
      "https://google.com",
      "http://example.com",
      "www.github.com",
    ]);
  });

  // TEST 5
  test("Picking the last URL from nested URLs", () => {
    const inputText =
      "Outer text [Inner text https://github.com and some more text [www.wikipedia.org]].";

    const urls = parseFile(inputText);
    expect(urls).toEqual(["www.wikipedia.org"]);
  });
});
