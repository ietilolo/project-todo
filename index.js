require("dotenv").config();
const express = require("express");
const methodoverride = require("method-override");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const PORT = process.env.PORT;
const CONNECT_URL = process.env.CONNECT_URL;

// Mongoose connect
mongoose.connect(CONNECT_URL)
  .then(() => {
    console.log("Connection: Open");
  });

// Config
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/todos", (req, res) => {
  res.render("todos");
});

app.get("/todos/add", (req, res) => {
  res.render("add");
});