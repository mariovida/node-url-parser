const { spawn } = require("child_process");

describe("Integration Test for URL Parser", () => {
  test("Input from a string", (done) => {
    jest.setTimeout(60000); // Setting timeout to 60 seconds

    // Defining the input
    const input = `
      [https://www.google.com]
      [http://example.com]
      [www.wikipedia.org]
      Valid URL with WWW: [www.github.com]
      Invalid URL: [https://thisurldoesnotexist12345.com]
    `;

    // Spawning the process and sending the input through stdin
    const child = spawn("node", ["src/parser.js"]);
    child.stdin.write(input);
    child.stdin.write("END\n");
    child.stdin.end();

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    // Capturing errors
    child.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    child.on("close", (code) => {
      // Checking for expected outputs
      expect(stdout).toContain('{"url":"https://www.google.com","title":');
      expect(stdout).toContain('{"url":"http://example.com","title":');
      expect(stdout).toContain('{"url":"www.wikipedia.org","title":');
      expect(stdout).toContain('{"url":"www.github.com","title":');

      // Allowing for a error message for failed URL
      const expectedErrorMessage = "Second attempt failed for";
      expect(stderr).toContain(expectedErrorMessage);

      done();
    });
  });
});
