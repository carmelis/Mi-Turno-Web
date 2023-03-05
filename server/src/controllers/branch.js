import BranchService from "../services/branch.js";
import {
  error,
  badrequest,
  ok,
  created,
  unauthorized,
  notfound,
} from "../helpers/response.helper.js";

class BranchController {
  // GET ALL BRANCHES
  static async getAll(req, res) {
    try {
      const branch = await BranchService.getAll();
      branch ? ok(res, branch) : notfound(res);
    } catch (err) {
      error(res, err.message);
    }
  }
  // GET BRANCH
  static async getById(req, res) {
    const { id } = req.params;
    try {
      const branch = await BranchService.getById(id);
      branch ? ok(res, branch) : notfound(res);
    } catch (err) {
      error(res, err.message);
    }
  }

  // CREATE BRANCH
  static async create(req, res) {
    const body = req.body;
    try {
      const branch = await BranchService.create(body);
      created(res, branch);
    } catch (err) {
      badrequest(res, err.message);
    }
  }

  // UPDATE BRANCH
  static async update(req, res) {
    const { id } = req.params;
    const body = req.body;
    try {
      const branch = await BranchService.update(id, body);
      created(res, branch);
    } catch (err) {
      badrequest(res, err.message);
    }
  }
}

export default BranchController;
