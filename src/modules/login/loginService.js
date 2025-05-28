import { postgres } from '../../database/db.js';
import { loginRepository } from './loginRepository.js';

export const loginService = {

  getAllUsers: async () => {
    const { rows } = await postgres.query(loginRepository.getAllUsers);
    return rows;
  },

  verifyLogin: async (username) => {
    const { rows } = await postgres.query(loginRepository.verifyLogin, [username]);
    return rows[0];
  },

  checkUserExists: async (username) => {
    const { rows } = await postgres.query(loginRepository.checkUser, [username]);
    return rows.length > 0;
  },

  createUser: async (username, password) => {
    const { rows } = await postgres.query(loginRepository.createUser, [username, password]);
    return rows[0];
  }
};
