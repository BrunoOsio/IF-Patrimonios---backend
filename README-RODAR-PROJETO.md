# Como rodar o projeto
## Instalar Node 20-22
> https://nodejs.org/pt

> Testado no Node 20

## Clone no projeto

Rode no terminal:

``` git clone https://github.com/BrunoOsio/IF-Patrimonios---backend```

## Instalar dependências

Rode no terminal:

```node --version```

- Certifica que o node foi instalado corretamente

```npm install```

- Instala dependências do projeto

## Configurar banco de dados

- Crie um arquivo ```.env```na raiz do projeto (pode copiar ```.env.example``` e renomear)
- adicione as credenciais



```
DB_HOST=200.19.1.18
DB_USER=rodrigosilva
DB_PASS=<COLOQUE A SENHA DO SISTEMA AQUI>
DB_NAME=rodrigosilva
DB_PORT=5432
```
Para rodar o projeto no servidor do IFSUL Gravataí, mude o DB_HOST para:
```
DB_HOST=192.168.20.18
```
## Iniciar servidor

Rode no terminal:

```npm run dev```

A base da API é:
> 127.0.0.1:8000/api




