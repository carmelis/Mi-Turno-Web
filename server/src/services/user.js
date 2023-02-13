import User from "../models/user.js";

class UserService {
  static async getUser(id) {
    try {
      return await User.findById(id);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getAllUsers() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  static async create(body) {
    try {
      return await User.create(body);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async login(email, password) {}
}

export default UserService;
