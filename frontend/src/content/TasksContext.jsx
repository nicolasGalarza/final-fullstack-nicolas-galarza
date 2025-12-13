import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as taskService from "../services/tasks";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) loadTasks();
  }, [token]);

  async function loadTasks() {
    const data = await taskService.getTasks(token);
    setTasks(data || []);
  }

  async function createTask(title) {
    const task = await taskService.createTask(title, token);
    setTasks((prev) => [...prev, task]);
  }

  async function deleteTask(id) {
    await taskService.deleteTask(id, token);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
