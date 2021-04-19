const express = require("express");
const app = express();
const port = 3000;
const {readFile} = require("fs"); 

app.use(express.json());

app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
  
});
app.listen(port, () => {
  console.log(`server in on ${port}`);
});