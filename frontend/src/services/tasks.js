import api from "./api";

// Obtener todas las tareas
export const getTasks = async () => {
  const res = await api.get("/tasks");
  // En el backend getTasks devuelve directamente el array
  return res.data;
};

// Crear nueva tarea
export const createTask = async (title) => {
  const res = await api.post("/tasks", { title });
  // createTask devuelve { success, task }
  return res.data.task;
};

// Actualizar tarea (título y/o completed)
export const updateTask = async (id, updates) => {
  const res = await api.put(`/tasks/${id}`, updates);
  // updateTask devuelve { success, task }
  return res.data.task;
};

// Eliminar tarea
export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};
