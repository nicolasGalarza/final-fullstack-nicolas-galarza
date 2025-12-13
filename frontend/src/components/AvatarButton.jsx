import { useState } from "react";
import { UserCircle } from "lucide-react";
import { useAuth } from "../content/AuthContext";

import AvatarMenu from "./AvatarMenu";

export default function AvatarButton() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const avatar = user?.avatar;

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      {/* Botón avatar */}
      <button
        type="button"
        onClick={toggleMenu}
        className="
          w-12 h-12 rounded-full overflow-hidden
          border border-white/20 shadow-md
          hover:scale-105 transition
          bg-gray-800/50 backdrop-blur-sm
        "
      >
        {avatar ? (
          <img
            src={`/avatars/${avatar}`}
            alt="Avatar del usuario"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <UserCircle size={32} className="text-white/80" />
          </div>
        )}
      </button>

      {/* Menú */}
      {open && <AvatarMenu close={() => setOpen(false)} />}
    </div>
  );
}
