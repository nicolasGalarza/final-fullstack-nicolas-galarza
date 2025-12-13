import { X, Copy, Share2, MessageCircle, Send } from "lucide-react";

export default function ShareModal({ close }) {
  const url = window.location.origin;

  function copyLink() {
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles ✔");
  }

  function shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
  }

  function shareDiscord() {
    navigator.clipboard.writeText(url);
    alert("Enlace copiado. Pegalo en Discord ✔");
  }

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "Mirá mi To-Do App! → " + url
      )}`,
      "_blank"
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-gray-900/95 border border-white/10 shadow-2xl p-6 rounded-xl w-80 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-white font-semibold flex items-center gap-2">
            <Share2 size={18} /> Compartir
          </h2>
          <button
            onClick={close}
            className="text-white hover:text-red-400 transition"
          >
            <X size={22} />
          </button>
        </div>

        <p className="text-gray-300 text-sm mb-4">
          Compartí tu proyecto con tus amigos:
        </p>

        <div className="flex flex-col gap-3">
          {/* WhatsApp */}
          <button
            onClick={shareWhatsApp}
            className="flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-600/40 p-2 rounded-lg transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>

          {/* Discord */}
          <button
            onClick={shareDiscord}
            className="flex items-center gap-3 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 border border-indigo-600/40 p-2 rounded-lg transition"
          >
            <Send size={18} />
            Discord
          </button>

          {/* Twitter */}
          <button
            onClick={shareTwitter}
            className="flex items-center gap-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/40 p-2 rounded-lg transition"
          >
            <Share2 size={18} />
            Twitter / X
          </button>

          {/* Copiar enlace */}
          <button
            onClick={copyLink}
            className="flex items-center gap-3 bg-gray-700/30 hover:bg-gray-700/50 text-white border border-gray-500/40 p-2 rounded-lg transition"
          >
            <Copy size={18} />
            Copiar enlace
          </button>
        </div>
      </div>
    </div>
  );
}
