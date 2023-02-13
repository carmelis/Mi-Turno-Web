import UserService from "../services/user.js";
import {
  error,
  badrequest,
  ok,
  created,
  unauthorized,
  notfound,
} from "../helpers/response.helper.js";

class UserController {
  // GET USER
  static async getUser(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.getUser(id);
      user ? ok(res, user) : notfound(res);
    } catch (err) {
      error(res);
    }
  }

  // GET ALL USERS
  static async getAllUsers(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.getAllUsers(id);
      user ? ok(res, user) : notfound(res);
    } catch (err) {
      error(res);
    }
  }

  // CREATE USER - REGISTER
  static async create(req, res) {
    const body = req.body;
    try {
      const user = await UserService.create(body);
      created(res, user);
    } catch (err) {
      badrequest(res, err.message);
    }
  }

  //LOG IN
  static async login(req, res) {
    const { email, password } = req.body;
    const { error, data } = await UserService.login(email, password);

    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }
    const token = generateToken(data);
    res.cookie("token", token);
    res.send(data);
  }

  // LOG OUT
  static async logout(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}

export default UserController;
