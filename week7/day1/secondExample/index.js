const express = require("express");
const app = express();
const port = 3000;
const { readFile } = require("fs"); 

app.use(express.json());

// app.get("/", (req, res) => {
//   readFile("./index.html", "utf8", (err, html) => {
//     res.send(html);
//   });
  
// });

app.get("/", (req, res) => {
  const message = "This is main";
  res.send(message);
});

app.get("/home", (req, res) => {
  const message = "This is home";
  res.send(message);
});

app.get("/faq", (req, res) => {
  const message = "This is faq";
  res.send(message);
});

app.get("/stuff", (req, res) => {
  const message = "This is stuff";
  res.send(message);
});

app.post("/messages", (req, res) => {
  const { logo } = req.body;
  const message = `Your logo is ${logo}`;
  res.send(message);
});

app.get("*", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`server in on ${port}`);
});