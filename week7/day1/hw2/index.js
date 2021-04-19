const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const { readFile } = require("fs"); 
app.use(express.json());

const server = http.createServer(app);

app.get("/", (req, res) => {
  const message = "This is main"
  res.send(message);
});

app.get("/store", (req, res) => {
  const message = "This is store"
  res.send(message);
});

app.get("/contact", (req, res) => {
  const message = "This is contact"
  res.send(message);
});

app.get("*", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});