import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Conexión a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Error al conectar MongoDB", err));

// Servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));
