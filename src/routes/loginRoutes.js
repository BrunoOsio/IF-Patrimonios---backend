import express from 'express';
import { postgres } from '../database/db.js';
import { responseCreated, responseInternalError, responseOK, responseBadRequest, responseUnauthorized } from '../helpers/http/httpResponseUtils.js';
import { loginRepository } from '../repository/loginRepository.js';

export const loginRouter = express.Router();

//Use this endpoint just testing purposes
loginRouter.get('/getAllUsers', async (req, res) => {
  try {
    const { rows } = await postgres.query(loginRepository.getAllUsers);
    
    responseOK(rows)
  } catch (err) {
    responseInternalError(res, "Error on getting all users", err)
  }
});

loginRouter.post('/verifyLogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = loginRepository.verifyLogin;
    const { rows } = await postgres.query(query, [username]);

    if (rows.length === 0) {
      responseUnauthorized(res, "User not found")
    }

    const user = rows[0];
    const userData = {
      pass: user.ds_senha,
      name: user.ds_login
    }

    if (userData.pass !== password) {
      responseUnauthorized(res, "Password is wrong")
    }

    responseOK('Login successful')
  } catch (err) {
    responseInternalError(res, "Error to verify login", err)
  }
});

loginRouter.post('/createUser', async (req, res) => {
  const { username, password } = req.body;

  try {
    const checkQuery = loginRepository.checkUser;
    const { rows: existingUsers } = await postgres.query(checkQuery, [username]);

    if (existingUsers.length > 0) {
      responseBadRequest(res, "User already exists")
    }

    const insertQuery = loginRepository.createUser;
    const values = [username, password];
    const { rows } = await postgres.query(insertQuery, values);

    const userData = {
      name: rows[0].ds_login,
      pass: rows[0].ds_senha
    };

    responseCreated(res, userData);
  } catch (err) {
    responseInternalError(res, "Error on create user", err)
  }
});
