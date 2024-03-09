import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/update").put(updateUser);
router.route("/logout").get(logoutUser);

export default router;
