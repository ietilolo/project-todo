const mongoose = require("mongoose");

// Create schema
const todo_schema = new mongoose.Schema({
  todo_title: String,
  todo_date: Date.now(),
  todo_desc: String,
  completed: Boolean
});

// Create Collection
const Todo = mongoose.model("Todo", todo_schema);
module.exports = Todo;