const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
const { response } = require("express");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server!");
});

app.post("/todo2", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)", [description]);
      res.json(newToDo); 
  } catch(err) {
    console.log(err.message);
  }
});

app.put("/update_todo2/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateToDo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
      res.json(updateToDo); 
  } catch(err) {
    console.log(err.message);
  }
});

app.delete("/del_todo2/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delToDo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1", [id]);
      res.json(delToDo); 
  } catch(err) {
    console.log(err.message);
  }
});

app.get("/get_todos2", async (req, res) => {
  try {
    const readToDos = await pool.query(
      "SELECT * from todo"
    );
      res.json(readToDos.rows[0]);
  } catch(err) {
    console.log(err.message);
  }
});

app.get("/get_todo2/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readToDo = await pool.query(
      "SELECT * from todo WHERE todo_id = ($1)", [id]
    );
      res.json(readToDo.rows[0].description);
  } catch(err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});