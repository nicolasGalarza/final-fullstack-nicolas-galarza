import express from "express";
import {
  register,
  login,
  updateAvatar,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/avatar", auth, updateAvatar);

export default router;
