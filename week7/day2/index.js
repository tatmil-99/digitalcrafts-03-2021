// installed express and now want to use it in our application.
const express = require("express");
// invoking express. An instance is now up and running.
const app = express(); 
// number used to identify transaction over network.
const port = 3000;

// const { readFile } = require("fs");

// middleware. convert req using express to json before sending a res back.
app.use(express.json());

// routes
// http methods
// get requires url path and callback function.
// function fires only if conditions are met.
// sends response to request location.
app.get("/", (req, res) => {
  const message = "message 1";
  res.send(message);
});

app.post("/about", (req, res) => {
  const { request } = req.body;
  const message = `Your message is ${request}`;
  res.send(message);
});

app.get("/team", (req, res) => {
  const message = "message 3";
  res.send(message);
});

app.get("/faq", (req, res) => {
  const message = "message 4";
  res.send(message);
});

// app(instance of express server). Listening for access to port.
app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});