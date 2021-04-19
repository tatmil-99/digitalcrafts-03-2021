const http = require("http");
const express = require("express");
const app = express();
const address = "127.0.0.1";
const port = 3002;
const {readFile} = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
  // res.end("Hello");
});

app.get("/home", (req, res) => {
  readFile("./homepage.html", "utf8", (err, html) => {
    res.send(html);
  });
  // res.end("Hello another place");
});

app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});

// not in express

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("hello");
// });

// server.listen(port, address, () => {
//   console.log(`server is on http://${address}:${port}/`);
// });