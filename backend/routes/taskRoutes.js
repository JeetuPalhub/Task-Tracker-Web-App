const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE
router.post("/", async (req, res) => {
    const { title, dueDate } = req.body;

    if(!title || !dueDate) {
        return res.status(400).json({ message: "Title & Due Date required" });
    }

    const task = await Task.create(req.body);
    res.status(201).json(task);
});

// READ
router.get("/", async (req, res) => {
    const tasks = await Task.find().sort({ dueDate: 1 });
    res.json(tasks);
});

// UPDATE STATUS
router.get("/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    res.json(task);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

module.exports = router;