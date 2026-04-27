const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// publicas
router.post('/usuarios/registrar', userController.registrar);
router.post('/usuarios/login', userController.login);

// protegidas
router.get('/usuarios/listar', authMiddleware, userController.listar);
router.put('/usuarios/atualizar/:id', authMiddleware, userController.atualizar);
router.delete('/usuarios/deletar/:id', authMiddleware, userController.deletar);

module.exports = router;

