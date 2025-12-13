import { useState } from "react";
import { register as registerService } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await registerService(email, password, nickname);
    if (data.success) {
      alert("Cuenta creada");
      navigate("/");
    } else {
      alert(data.msg);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl w-80 shadow-lg flex flex-col gap-4 text-center"
      >
        {/* Título centrado */}
        <h2 className="text-xl font-semibold">Registrarse</h2>

        <input
          className="p-2 rounded bg-gray-700 text-left"
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <input
          className="p-2 rounded bg-gray-700 text-left"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-2 rounded bg-gray-700 text-left"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 py-2 rounded hover:bg-blue-700 transition">
          Crear cuenta
        </button>

        {/* Link centrado */}
        <Link to="/" className="text-sm text-blue-400 hover:underline block">
          Ya tengo cuenta
        </Link>
      </form>
    </div>
  );
}
