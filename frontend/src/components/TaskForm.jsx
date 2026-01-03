import { useState } from "react";
import { createTask } from "../services/taskApi";

export default function TaskForm({ fetchTasks }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(form);
      setForm({ title: "", description: "", priority: "Low", dueDate: "" });
      fetchTasks();
    } catch {
      alert("Failed to add task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        required
      />

      <input
        type="date"
        value={form.dueDate}
        onChange={e => setForm({ ...form, dueDate: e.target.value })}
        required
      />

      <select
        value={form.priority}
        onChange={e => setForm({ ...form, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button disabled={!form.title || !form.dueDate}>
        Add Task
      </button>
    </form>
  );
}
