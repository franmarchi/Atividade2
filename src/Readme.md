# API de Usuários - Atividade 2

API simples de CRUD de usuários com autenticação usando JWT.
Feita com Node.js, Express e MongoDB seguindo padrão MVC.

---

## Como rodar

1. Instalar dependências:

```
npm install
```

2. Subir o MongoDB (local):

```
mongodb://127.0.0.1:27017/atividade2
```

3. Rodar o projeto:

```
npm run dev
```

Servidor:
http://localhost:3000

---

## Autenticação

Após login, usar o token no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## Endpoints

### Criar usuário

POST /api/usuarios/registrar

```
{
  "nome": "Ana",
  "email": "ana@email.com",
  "senha": "123456",
  "idade": 25
}
```

---

### Login

POST /api/usuarios/login

```
{
  "email": "ana@email.com",
  "senha": "123456"
}
```

---

### Listar usuários (precisa de token)

GET /api/usuarios

---

### Deletar usuário (precisa de token)

DELETE /api/usuarios/:id

---

## Testes

Usei Thunder Client pra testar as rotas.

(prints na pasta /docs)

---

## Observações

* Senha é salva com hash (bcrypt)
* Token expira em 1h
* Banco é criado automaticamente
* Optei por rotas mais descritivas para facilitar a compreensão das operações, 
  mantendo consistência com os demais endpoints como registrar e login.

