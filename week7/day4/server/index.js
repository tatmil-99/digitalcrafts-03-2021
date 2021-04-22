const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
const { response } = require("express");

app.use(express.json());
app.use(cors());