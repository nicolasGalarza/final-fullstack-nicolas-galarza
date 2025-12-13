import { useState } from "react";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  function handleToggleCompleted() {
    onUpdate(task._id, { completed: !task.completed });
  }

  function handleStartEdit() {
    setEditTitle(task.title);
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setEditTitle(task.title);
    setIsEditing(false);
  }

  function handleSaveEdit() {
    const cleanTitle = editTitle.trim();
    if (!cleanTitle) return;

    onUpdate(task._id, { title: cleanTitle });
    setIsEditing(false);
  }

  return (
    <div className="flex items-center justify-between bg-slate-900/70 border border-slate-700 rounded-lg px-4 py-3 mb-3">
      {/* Checkbox + título */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
          className="h-4 w-4 cursor-pointer accent-blue-500"
        />

        {isEditing ? (
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
            className="bg-slate-800 text-slate-100 px-3 py-1 rounded outline-none border border-blue-500/70 w-72 max-w-full"
          />
        ) : (
          <span
            className={`text-slate-100 ${
              task.completed ? "line-through text-slate-500" : ""
            }`}
          >
            {task.title}
          </span>
        )}
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="px-3 py-1 text-sm rounded bg-emerald-600 hover:bg-emerald-500 text-white transition"
            >
              Guardar
            </button>

            <button
              onClick={handleCancelEdit}
              className="px-3 py-1 text-sm rounded bg-slate-600 hover:bg-slate-500 text-white transition"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={handleStartEdit}
            className="px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            Editar
          </button>
        )}

        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-500 text-white transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
