import { useEffect, useState } from "react";
import * as tasksAPI from "../services/tasks";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await tasksAPI.getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error al cargar tareas", err);
    }
  }

  async function createTask(title) {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    try {
      const newTask = await tasksAPI.createTask(cleanTitle);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      console.error("Error al crear tarea", err);
    }
  }

  async function updateTask(id, updates) {
    try {
      const updated = await tasksAPI.updateTask(id, updates);
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? updated : task))
      );
    } catch (err) {
      console.error("Error al actualizar tarea", err);
    }
  }

  async function deleteTask(id) {
    try {
      await tasksAPI.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error al eliminar tarea", err);
    }
  }

  return {
    tasks,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}
