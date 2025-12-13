// src/pages/Login.jsx
import { useState } from "react";
import { login as loginService } from "../services/auth";
import { useAuth } from "../content/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await loginService(email, password);
    if (data.success) {
      login(data.user, data.token);
      navigate("/home");
    } else {
      alert(data.msg);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl w-80 shadow-lg flex flex-col gap-4"
      >
        {/* TÍTULO NUEVO CENTRADO */}
        <h2 className="text-2xl font-semibold text-center">To-Do Tareas</h2>

        <input
          className="p-2 rounded bg-gray-700"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-2 rounded bg-gray-700"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BOTÓN CAMBIADO */}
        <button className="bg-blue-600 py-2 rounded hover:bg-blue-700 transition font-semibold">
          Iniciar sesión
        </button>

        {/* TEXTO NUEVO DEBAJO */}
        <div className="text-sm text-center text-gray-300 mt-1">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
