const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const pool = require("./db.js");
const cors = require("cors");
const templateEngine = require("express-es6-template-engine");

app.use(express.json());
app.use(cors());
app.engine("html", templateEngine);
app.set("views", "../client");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.send("success");
});



app.listen(port, () => {
  console.log(`listening on ${port}`);
});