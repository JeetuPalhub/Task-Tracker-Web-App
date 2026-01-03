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
    await createTask(form);
    setForm({
      title: "",
      description: "",
      priority: "Low",
      dueDate: ""
    });
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        required
        style={{ width: "100%", marginBottom: 8, padding: 6 }}
      />

      <textarea
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        style={{ width: "100%", marginBottom: 8, padding: 6 }}
      />

      <select
        value={form.priority}
        onChange={(e) =>
          setForm({ ...form, priority: e.target.value })
        }
        style={{ width: "100%", marginBottom: 8, padding: 6 }}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={form.dueDate}
        onChange={(e) =>
          setForm({ ...form, dueDate: e.target.value })
        }
        required
        style={{ width: "100%", marginBottom: 8, padding: 6 }}
      />

      <button
        disabled={!form.title || !form.dueDate}
        style={{
          padding: "8px 14px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        Add Task
      </button>
    </form>
  );
}
