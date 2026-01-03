import TaskItem from "./TaskItem";
import { updateTask, deleteTask } from "../services/taskApi";

export default function TaskList({ tasks, fetchTasks }) {
  if (!tasks.length) return <p>No tasks yet 🚀</p>;

  return tasks.map(task => (
    <TaskItem
      key={task._id}
      task={task}
      onToggle={async () => {
        await updateTask(
          task._id,
          task.status === "Pending" ? "Completed" : "Pending"
        );
        fetchTasks();
      }}
      onDelete={async () => {
        await deleteTask(task._id);
        fetchTasks();
      }}
    />
  ));
}
