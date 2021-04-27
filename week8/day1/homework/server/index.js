const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const pool = require("./db.js");
const cors = require("cors");
const templateEngine = require("express-es6-template-engine");

app.use(express.json());
app.use(cors());
app.engine("html", templateEngine);
app.set("views", "../templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDoInDB = await pool.query(
      "INSERT INTO todo_3 (description) VALUES($1)", [description]);
    res.json(newToDoInDB);
  } catch(err) {
    console.log(err.message);
  }
});



app.listen(port, () => {
  console.log(`listening on ${port}`);
});