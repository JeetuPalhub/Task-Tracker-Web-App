import { updateTask, deleteTask } from "../services/taskApi";

export default function TaskList({ tasks, fetchTasks }) {
  if (!tasks.length) return <p>No tasks yet 🚀</p>;

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            background: "#fafafa",
            padding: 12,
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #ddd"
          }}
        >
          <h3>{task.title}</h3>

          {task.description && <p>{task.description}</p>}

          <p>
            Priority:
            <span
              style={{
                marginLeft: 6,
                fontWeight: "bold",
                color:
                  task.priority === "High"
                    ? "red"
                    : task.priority === "Medium"
                    ? "orange"
                    : "green"
              }}
            >
              {task.priority}
            </span>
          </p>

          <p>
            Status:
            <span
              style={{
                marginLeft: 6,
                color:
                  task.status === "Completed" ? "green" : "orange"
              }}
            >
              {task.status}
            </span>
          </p>

          <button
            onClick={async () => {
              await updateTask(
                task._id,
                task.status === "Pending"
                  ? "Completed"
                  : "Pending"
              );
              fetchTasks();
            }}
            style={{
              marginRight: 8,
              padding: "6px 10px",
              background: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Toggle Status
          </button>

          <button
            onClick={async () => {
              await deleteTask(task._id);
              fetchTasks();
            }}
            style={{
              padding: "6px 10px",
              background: "#f44336",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
