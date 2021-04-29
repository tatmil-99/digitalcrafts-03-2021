const express = require("express");
const app = express();
const port = 3001;
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

app.post("/sendToDo", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDoInDB = await pool.query(
      "INSERT INTO todo_3 (description) VALUES($1)", [description]);
    res.status(200).send("It works");
  } catch(err) {
    console.log(err.message);
  }
});

app.get("/get_todo", async (req, res) => {
  const grabData = await pool.query("SELECT * FROM todo_3");
  res.render("todo", {
    locals: {
      todos: grabData.rows,
    },
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});