import { check } from "express-validator";
import validate from "../helpers/request.helper.js";

// CREATE USER - REGISTER
const validateSignup = [
  check("name").exists().not().isEmpty(),
  check("dni").exists().not().isEmpty().isNumeric(),
  check("email").exists().not().isEmpty().isEmail(),
  check("password").exists().not().isEmpty(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export default validateSignup;
