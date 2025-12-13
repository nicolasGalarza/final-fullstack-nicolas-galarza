import { useState, useEffect, useRef } from "react";
import { useAuth } from "../content/AuthContext";
import { avatars } from "../data/avatars";

// Íconos
import {
  UserCircle,
  Share2,
  LogOut,
  ArrowLeft,
  Link as LinkIcon,
  MessageCircle,
  Send,
  Instagram,
} from "lucide-react";

export default function AvatarMenu({ close }) {
  const { logout, updateAvatar } = useAuth();
  const menuRef = useRef(null);

  const [menu, setMenu] = useState("main");

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  async function handleAvatarChange(img) {
    try {
      await updateAvatar(img);
      close();
    } catch (error) {
      console.error("Error al actualizar avatar:", error);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }

  function shareWhatsApp() {
    window.open(
      `https://api.whatsapp.com/send?text=${window.location.href}`,
      "_blank"
    );
  }

  function shareTelegram() {
    window.open(`https://t.me/share/url?url=${window.location.href}`, "_blank");
  }

  function openInstagram() {
    window.open("https://instagram.com", "_blank");
  }

  return (
    <div
      ref={menuRef}
      className="
        absolute right-0 mt-2 w-64
        bg-gray-900/95 p-4 rounded-xl
        shadow-xl border border-white/10
        backdrop-blur-md z-50 animate-fadeIn
      "
    >
      {/* MENÚ PRINCIPAL */}
      {menu === "main" && (
        <div className="flex flex-col gap-3 text-white">
          <button
            type="button"
            onClick={() => setMenu("avatar")}
            className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
          >
            <UserCircle size={22} />
            <span className="text-sm">Cambiar avatar</span>
          </button>

          <button
            type="button"
            onClick={() => setMenu("share")}
            className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
          >
            <Share2 size={20} />
            <span className="text-sm">Compartir</span>
          </button>

          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-3 hover:bg-red-600/20 text-red-400 p-2 rounded-lg transition"
          >
            <LogOut size={20} />
            <span className="text-sm">Cerrar sesión</span>
          </button>
        </div>
      )}

      {/* SUBMENÚ AVATAR */}
      {menu === "avatar" && (
        <div className="text-white">
          <button
            type="button"
            onClick={() => setMenu("main")}
            className="flex items-center gap-2 mb-3 text-sm text-blue-400 hover:underline"
          >
            <ArrowLeft size={18} />
            Volver
          </button>

          <p className="mb-2 font-semibold text-sm">Elegí avatar:</p>

          <div className="grid grid-cols-3 gap-3">
            {avatars.map((img) => (
              <button
                key={img}
                type="button"
                onClick={() => handleAvatarChange(img)}
              >
                <img
                  src={`/avatars/${img}`}
                  alt={img}
                  className="w-14 h-14 rounded-full object-cover border border-white/20 hover:scale-105 transition"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SUBMENÚ COMPARTIR */}
      {menu === "share" && (
        <div className="text-white">
          <button
            type="button"
            onClick={() => setMenu("main")}
            className="flex items-center gap-2 mb-3 text-sm text-blue-400 hover:underline"
          >
            <ArrowLeft size={18} />
            Volver
          </button>

          <p className="mb-2 font-semibold text-sm">Compartir enlace:</p>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={copyLink}
              className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
            >
              <LinkIcon size={20} />
              <span className="text-sm">Copiar enlace</span>
            </button>

            <button
              type="button"
              onClick={shareWhatsApp}
              className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
            >
              <MessageCircle size={20} />
              <span className="text-sm">WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={shareTelegram}
              className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
            >
              <Send size={20} />
              <span className="text-sm">Telegram</span>
            </button>

            <button
              type="button"
              onClick={openInstagram}
              className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
