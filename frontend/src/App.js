import { useEffect, useState } from "react";
import { getTasks } from "./services/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

const fetchTasks = async () => {
  try {
    const res = await getTasks();
    setTasks(res.data);
  } catch (err) {
    alert("Failed to load tasks");
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
