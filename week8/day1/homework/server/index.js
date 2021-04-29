// MODULES AND SERVER SET UP
const express = require("express");
const app = express();
const port = 3001;
const pool = require("./db.js");
const cors = require("cors");
const templateEngine = require("express-es6-template-engine");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.engine("html", templateEngine);
app.set("views", "../templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("home");
});

// CREATE
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

// READ
app.get("/get_todo", async (req, res) => {
  const grabData = await pool.query("SELECT * FROM todo_3");
  res.render("todo", {
    locals: {
      todos: grabData.rows,
    },
  });
});

// UPDATE
app.put("/update_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const update = await pool.query(
      "UPDATE todo_3 SET (description) = ($1) WHERE todo_id = ($2)," [description, id]);
    res.json(update); 
  } catch (err) {
    console.log(err.message);
  }
});
  
// DELETE
app.delete("/delete_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDoInDB = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("todo was deleted")
  } catch(err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});