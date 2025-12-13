import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);

    setLoading(false);
  }, []);

  function login(userData, tokenData) {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", tokenData);
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  async function updateAvatar(avatarUrl) {
    const res = await api.put(
      "/users/avatar",
      { avatar: avatarUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const updated = { ...user, avatar: avatarUrl };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));

    return res.data;
  }

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateAvatar }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
