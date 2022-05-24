const mongoose = require("mongoose");
const Todo = require("./models/Todo");
mongoose.connect("mongodb://localhost:27017/todoapp");

// seed data
const seedTodos = [
    {
      todo_title: "Vacuum House",
      todo_date: "5/25/2022",
      todo_desc: "Vacuum the whole house",
      completed: false
    },
    {
      todo_title: "Clean dishes",
      todo_date: "5/25/2022",
      todo_desc: "Clean the dishes including utensils",
      completed: false
    },
    {
      todo_title: "Change litter box",
      todo_date: "5/25/2022",
      todo_desc: "Change moosey's litterbox",
      completed: false
    }
];

Todo.insertMany(seedTodos)
.catch(err => {
    console.log(err)
})