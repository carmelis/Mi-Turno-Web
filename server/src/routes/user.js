import express from "express";
import ClientController from "../controllers/user.js";
import { validateAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", ClientController.getAllUsers); // añadir validateAdmin
router.get("/validate", validateAuth, (req, res) => {
  res.send(req.user);
});
router.get("/:id", ClientController.getUser); // añadir validateAuth

router.post("/create", ClientController.create);
router.post("/login", ClientController.login);
router.post("/logout", ClientController.logout);

export default router;
