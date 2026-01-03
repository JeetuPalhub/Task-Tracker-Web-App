export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColor = {
    High: "red",
    Medium: "orange",
    Low: "green"
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <span style={{ color: priorityColor[task.priority] }}>
        {task.priority}
      </span>
      <p>Status: {task.status}</p>

      <button onClick={onToggle}>Toggle</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
