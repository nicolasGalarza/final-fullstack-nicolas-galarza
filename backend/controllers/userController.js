import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  const { nickname, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, msg: "El usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      nickname,
      email,
      password: hashedPassword,
    });

    return res.json({
      success: true,
      user: {
        id: newUser._id,
        nickname: newUser.nickname,
        email: newUser.email,
        avatar: newUser.avatar || null,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al registrar usuario",
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, msg: "Credenciales inválidas" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, msg: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: user._id, nickname: user.nickname },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar || null,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al iniciar sesión",
    });
  }
};

// UPDATE AVATAR
export const updateAvatar = async (req, res) => {
  const { avatar } = req.body;

  if (!avatar) {
    return res.status(400).json({
      success: false,
      msg: "Avatar requerido",
    });
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar },
      { new: true }
    );

    return res.json({
      success: true,
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al actualizar avatar",
    });
  }
};
