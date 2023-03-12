import responseHelper from "../helpers/response.helper.js";
import userModel from "../models/User.js";
import jsonwebtoken from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { name, dni, email, password } = req.body;

    const checkUser = await userModel.findOne({ dni });

    if (checkUser)
      return responseHelper.badrequest(res, "This person already has an account.");

    const user = new userModel();

    user.name = name;
    user.dni = dni;
    user.email = email
    user.setPassword(password);

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

export default { signup };
