import { useEffect, useState } from "react";
import AvatarMenu from "./AvatarMenu";
import { useAuth } from "../content/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || "default.png"
  );
  const [openMenu, setOpenMenu] = useState(false);

  // Cuando AvatarMenu actualiza avatar, escuchamos el evento
  useEffect(() => {
    function refreshAvatar() {
      setAvatar(localStorage.getItem("avatar") || "default.png");
    }

    window.addEventListener("avatarUpdated", refreshAvatar);
    return () => window.removeEventListener("avatarUpdated", refreshAvatar);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md h-16 flex items-center px-6 z-40 border-b border-white/10">
      <h1 className="text-lg font-semibold text-white">Tu To-Do List</h1>

      <div className="ml-auto relative">
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img
            src={`/avatars/${avatar}`}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-white/20 object-cover cursor-pointer"
          />
        </button>

        {openMenu && <AvatarMenu close={() => setOpenMenu(false)} />}
      </div>
    </nav>
  );
}
