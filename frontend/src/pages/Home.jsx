import { useState } from "react";
import { useAuth } from "../content/AuthContext";
import useTasks from "../hooks/useTasks";

import TaskItem from "../components/TaskItem";
import AvatarButton from "../components/AvatarButton";

export default function Home() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");

  const { tasks, createTask, updateTask, deleteTask } = useTasks();

  const nickname = user?.nickname || "Usuario";

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    createTask(title);
    setTitle("");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="flex-1 text-center text-xl font-semibold">
            Bienvenido, <span className="text-blue-400">{nickname}</span>
          </h1>

          <div className="ml-4">
            <AvatarButton />
          </div>
        </header>

        {/* Nueva tarea */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Nueva tarea..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-500 text-slate-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 rounded-lg transition"
          >
            Agregar
          </button>
        </form>

        {/* Lista */}
        {tasks.length === 0 ? (
          <p className="text-slate-400">No tienes tareas aún.</p>
        ) : (
          <div className="mt-2">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onUpdate={updateTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
