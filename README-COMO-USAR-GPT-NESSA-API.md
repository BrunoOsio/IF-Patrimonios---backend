# Utilizando ChatGPT para desenvolver a API ou Frontend

Último update: 26 de maio

Este documento detalha as APIs atuais disponíveis para o desenvolvimento do frontend ou backend

Para utilizar ChatGPT no documento, copie o prompt abaixo

```
Esse arquivo json contém as especificacoes de uma API, atualmente tem login e patrimonios

{
  "name": "Faculdade",
  "version": "1",
  "items": [
    {
      "type": "folder",
      "name": "Desenvolvimento Sistemas",
      "items": [
        {
          "type": "http",
          "name": "Usuarios Login",
          "seq": 1,
          "request": {
            "url": "127.0.0.1:8000/api/login",
            "method": "GET",
            "headers": [],
            "params": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            }
          }
        },
        {
          "type": "http",
          "name": "Verificar Login",
          "seq": 2,
          "request": {
            "url": "127.0.0.1:8000/api/login/verifyLogin",
            "method": "GET",
            "headers": [],
            "params": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            }
          }
        },
        {
          "type": "http",
          "name": "Criar usuario",
          "seq": 3,
          "request": {
            "url": "127.0.0.1:8000/api/login/verifyLogin",
            "method": "POST",
            "headers": [],
            "params": [],
            "body": {
              "mode": "json",
              "json": "{\n  \"password\": \"123456\",\n  \"username\": \"bruno\"\n}",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            }
          }
        },
        {
          "type": "http",
          "name": "Listar patrimonios",
          "seq": 4,
          "request": {
            "url": "127.0.0.1:8000/api/publicEstates",
            "method": "GET",
            "headers": [],
            "params": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            }
          }
        }
      ]
    }
  ],
  "environments": [],
  "brunoConfig": {
    "version": "1",
    "name": "Faculdade",
    "type": "collection",
    "ignore": [
      "node_modules",
      ".git"
    ]
  }
}

Vou te fazer perguntas sobre esse json para me ajudar a desenvolver o front end
```

O modelo de especificação técnica da API em `formato json` foi criado usando o `testador HTTP Bruno`, mas pode ser usado o `Insomnia` ou `Postman`