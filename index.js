require("dotenv").config();
const express = require("express");
const methodoverride = require("method-override");
const mongoose = require("mongoose");

// Config
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home");
});