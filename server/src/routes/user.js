import express from "express";
import userController from "../controllers/user.js";
import { validateSignup, validateSignin } from "../validators/user.js";

const router = express.Router();

// SIGNUP
router.post("/signup", validateSignup, userController.signup);

// SIGNIN
router.post("/signin", validateSignin, userController.signin);

// CREATE USER / OPERATOR
router.post("/create", validateSignup, userController.create);

export default router;
