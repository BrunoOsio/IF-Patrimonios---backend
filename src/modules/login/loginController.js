import { loginService } from './loginService.js';
import { responseCreated, responseInternalError, responseOK, responseBadRequest, responseUnauthorized } from '../../common/http/httpResponseUtils.js';

export const loginController = {

  getAllUsers: async (req, res) => {
    try {
      const users = await loginService.getAllUsers();
      return responseOK(res, users);
    } catch (err) {
      return responseInternalError(res, "Error on getting all users", err);
    }
  },

  verifyLogin: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await loginService.verifyLogin(username);

      if (!user) {
        return responseUnauthorized(res, "User not found");
      }

      if (user.ds_senha !== password) {
        return responseUnauthorized(res, "Password is wrong");
      }

      return responseOK(res, 'Login successful');
    } catch (err) {
      return responseInternalError(res, "Error to verify login", err);
    }
  },

  createUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      const exists = await loginService.checkUserExists(username);

      if (exists) {
        return responseBadRequest(res, "User already exists");
      }

      const user = await loginService.createUser(username, password);
      const userData = { name: user.ds_login, pass: user.ds_senha };

      return responseCreated(res, userData);
    } catch (err) {
      return responseInternalError(res, "Error on create user", err);
    }
  }
};
