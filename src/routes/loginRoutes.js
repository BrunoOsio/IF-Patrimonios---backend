import express from 'express';
import { postgres } from '../database/db.js';

export const loginRouter = express.Router();

//Use this endpoint just testing purposes
loginRouter.get('/getAllUsers', async (req, res) => {
  try {
    const { rows } = await postgres.query('SELECT * FROM tb_if_login');
    
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar o banco' });
  }
});

loginRouter.post('/verifyLogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = 'SELECT * FROM tb_if_login WHERE ds_login = $1';
    const { rows } = await postgres.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const user = rows[0];
    const userData = {
      pass: user.ds_senha,
      name: user.ds_login
    }

    if (userData.pass !== password) {
      return res.status(401).json({ message: `Senha incorreta: Usuário ${userData.name}` });
    }

    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao verificar login' });
  }
});

loginRouter.post('/createUser', async (req, res) => {
  const { username, password } = req.body;

  try {
    const checkQuery = 'SELECT * FROM tb_if_login WHERE ds_login = $1';
    const { rows: existingUsers } = await postgres.query(checkQuery, [username]);

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const insertQuery = 'INSERT INTO tb_if_login (ds_login, ds_senha) VALUES ($1, $2) RETURNING *';
    const values = [username, password];
    const { rows } = await postgres.query(insertQuery, values);

    const userData = {
      name: rows[0].ds_login,
      pass: rows[0].ds_senha
    };

    res.status(201).json({ message: 'Usuário criado com sucesso', user: userData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});
