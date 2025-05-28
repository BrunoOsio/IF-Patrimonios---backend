import express from 'express';
import { loginController } from '../modules/login/loginController.js';
import { loginEndpoints } from './routesConstants.js';

export const loginRouter = express.Router();

loginRouter.get(loginEndpoints.getAllUsers, loginController.getAllUsers);
loginRouter.post(loginEndpoints.verifyLogin, loginController.verifyLogin);
loginRouter.post(loginEndpoints.createUser, loginController.createUser);
