const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/usuarios/listar', userController.listar);
router.get('/usuarios/buscar/:id', userController.buscarPorId);
router.post('/usuarios/criar', userController.criar);
router.put('/usuarios/atualizar/:id', userController.atualizar);
router.delete('/usuarios/deletar/:id', userController.deletar);

module.exports = router;
