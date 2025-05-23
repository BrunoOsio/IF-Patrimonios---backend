import express from 'express';
import { postgres } from '../database/db.js';

export const publicEstateRouter = express.Router();

publicEstateRouter.get('/', async (req, res) => {
  try {
    const { rows } = await postgres.query('SELECT * FROM tb_if_leitura');
    
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar o banco' });
  }
});
