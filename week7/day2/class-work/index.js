const express = require("express");
const app = express();

const port = 3001;

const { readFile } = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html)
  });
});

app.get("/about", (req, res) => {
  const message = "About";
  res.send(message);
});

app.get("/contact", (req, res) => {
  const message = "Contact";
  res.send(message);
});

app.post("/stuff", (req, res) => {
  const { stuff } = req.body;
  const message = `Just some random ${stuff}`;
  res.send(message);
});

app.get("*", (req, res) => {
  const message = "404";
  res.send(message);
});

app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});