import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getTasks = () => API.get("/api/tasks");
export const createTask = (data) => API.post("/api/tasks", data);
export const updateTask = (id, status) =>
  API.put(`/api/tasks/${id}`, { status });
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`);
