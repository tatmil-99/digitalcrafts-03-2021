const express = require("express");
const app = express();

const port = 3000;

const { readFile } = require("fs"); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));


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

app.listen(port, () => {
  console.log(`server running at ${port}`);
});