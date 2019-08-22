const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

//Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//Add todo
router.post("/", async (req, res) => {
  const { todoName } = req.body;

  try {
    await Todo.findOne({ todoName });

    const newTodo = await new Todo({
      todoName
    });

    await newTodo.save();

    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//Update Todo
router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { todoName } = req.body;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(400).json({ message: "Todo doesnt exists!" });
    } else {
      await todo.updateOne({
        todoName
      });
    }

    res.json({ message: "Updated" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//Delete Todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(400).json({ message: "Todo doesnt exists!" });
    }

    await todo.remove();

    res.json({ message: "Todo Removed! " });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
