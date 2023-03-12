import express from "express";
import userController from "../controllers/user.js";
import { validateAuth, validateAdmin } from "../middlewares/auth.js";
import validateSignup from "../validators/user.js";

const router = express.Router();

// CREATE USER - REGISTER
router.post("/signup", validateSignup, userController.signup);

// router.get("/", validateAdmin, userController.getAllUsers); // añadir validateAdmin
router.get("/validate", validateAuth, (req, res) => {
  res.send(req.user);
});
// router.get("/:id", userController.getUser); // añadir validateAuth

// router.post("/login", userController.login);
// router.post("/logout", userController.logout);

export default router;
