import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const postgres = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT)
});

postgres.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});
