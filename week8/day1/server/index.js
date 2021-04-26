const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const pool = require("./db.js")
const { response } = require("express");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server!");
});

app.post("/new_item", async (req, res) => {
  try {
    const { item } = req.body;
    const { qty } = req.body;

    const newItem = await pool.query(
      "INSERT INTO groceries (item, qty) VALUES($1, $2)", [item, qty]
    );
    res.json(newItem)
  } catch(err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});