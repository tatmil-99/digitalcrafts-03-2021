const express = require("express");
const app = express();
const port = 3000;

const { readFile } = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  const message = "message 1";
  res.send(message);
});

app.post("/about", (req, res) => {
  const { request } = req.body;
  const message = `Your message is ${request}`;
  res.send(message);
});

app.get("/team", (req, res) => {
  const message = "message 3";
  res.send(message);
});

app.get("/faq", (req, res) => {
  const message = "message 4";
  res.send(message);
});

app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});