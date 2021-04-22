const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});

// routes we define for node server
// create todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
    res.json(newToDoInDB);
  } catch (err) {
    console.log(err.message);
  }
});

// read todo list
app.get("/read_todos", async (req, res) => {
  try {
    const readToDoFromDB = await pool.query("SELECT * from todo");
    res.json(readToDoFromDB);
  } catch (err) {
    console.log(err.message);
  }
})

// read a specific todo
app.get("/read_todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readSingleToDoFromDB = await pool.query("SELECT * from todo WHERE todo_id = ($1)", [id]);
    res.json(readSingleToDoFromDB);
  } catch (err) {
    console.log(err.message);
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
