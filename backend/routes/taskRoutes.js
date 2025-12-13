import express from "express";
import { auth } from "../middleware/auth.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Todas las rutas requieren token JWT
router.use(auth);

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
