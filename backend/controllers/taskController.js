import Task from "../models/Task.js";

// Crear tarea
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        msg: "Título inválido",
      });
    }

    const newTask = await Task.create({
      userId: req.user.id,
      title: title.trim(),
    });

    return res.status(201).json({
      success: true,
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error en el servidor",
    });
  }
};

// Obtener tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error en el servidor",
    });
  }
};

// Editar tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        msg: "Tarea no encontrada",
      });
    }

    return res.status(200).json({
      success: true,
      task: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error en el servidor",
    });
  }
};

// Eliminar tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        msg: "Tarea no encontrada",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error en el servidor",
    });
  }
};
