import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { loginRouter } from './routes/loginRoutes.js';
import { publicEstateRouter } from './routes/publicEstateRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/login', loginRouter);
app.use("/api/publicEstates", publicEstateRouter)

const PORT = 8000
app.listen(PORT, () => 
  console.log(`
    Conexão com banco postgres
    ----------------------
    DB_HOST: ${process.env.DB_HOST}
    DB_HOST_PORT: ${process.env.DB_PORT}
    DB_USER: ${process.env.DB_USER}
    DB_NAME: ${process.env.DB_NAME}
    DB_PASS: <PASSWORD NOT SHOWN>
    ----------------------
    Servidor rodando em > [http://127.0.0.1:${PORT}/api]

    Cheque no arquivo routes.js as rotas possiveis para testar a API
  `));