import responseHelper from "../helpers/response.helper.js";
import userModel from "../models/User.js";
import jsonwebtoken from "jsonwebtoken";

// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, dni, email, password, role } = req.body;

    const checkDni = await userModel.findOne({ dni });

    if (checkDni)
      return responseHelper.badrequest(
        res,
        "This person already has an account."
      );

    const checkEmail = await userModel.findOne({ email });

    if (checkEmail)
      return responseHelper.badrequest(
        res,
        "This email is already registered."
      );

    const user = new userModel();

    user.name = name;
    user.dni = dni;
    user.email = email;
    user.setPassword(password);
    role === "admin" ? (user.role = role) : null;

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    responseHelper.created(res, {
      token,
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHelper.error(res);
  }
};

// SIGNIN
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel
      .findOne({ email })
      .select("name dni email password role branch salt id");

    if (!user) return responseHelper.badrequest(res, "User not exist");

    if (!user.validPassword(password))
      return responseHelper.badrequest(res, "Wrong password");

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    user.password = undefined;
    user.salt = undefined;

    responseHelper.created(res, {
      token,
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHelper.error(res);
  }
};

// CREATE USER / OPERATOR

const create = () => {};

export default { signup, signin, create };
