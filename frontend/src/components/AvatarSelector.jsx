import { avatars } from "../data/avatars";
import { updateAvatar } from "../services/auth";

export default function AvatarSelector({ onClose }) {
  async function handleSelect(avatarName) {
    try {
      // Guardar en backend
      const res = await updateAvatar(avatarName);

      if (res.success) {
        // Guardar en localStorage
        localStorage.setItem("avatar", avatarName);

        // Cerrar menú
        onClose();

        // Refrescar avatar mostrado
        window.dispatchEvent(new Event("avatarUpdated"));
      }
    } catch (error) {
      console.log("Error seleccionando avatar:", error);
    }
  }

  return (
    <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg p-2 z-50">
      <p className="text-xs text-gray-400 mb-2">Elegir avatar:</p>

      <div className="grid grid-cols-3 gap-2">
        {avatars.map((a) => (
          <img
            key={a}
            src={`/avatars/${a}`}
            alt={a}
            className="w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition"
            onClick={() => handleSelect(a)}
          />
        ))}
      </div>
    </div>
  );
}
