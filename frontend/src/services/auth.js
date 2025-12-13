import api from "./api";

export async function login(email, password) {
  const res = await api.post("/users/login", { email, password });
  return res.data;
}

export async function register(email, password, nickname) {
  const res = await api.post("/users/register", {
    email,
    password,
    nickname,
  });
  return res.data;
}

export async function updateAvatar(avatar) {
  const res = await api.put("/users/avatar", { avatar });
  return res.data;
}
