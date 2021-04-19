console.log("hi");

const http = require("http");
const address = "127.0.0.1";
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("hello");
});

server.listen(port, address, () => {
  console.log(`server is on http://${address}:${port}/`);
});