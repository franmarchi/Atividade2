const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/usuarios/registrar', userController.registrar);
router.post('/usuarios/login', userController.login);

router.get('/usuarios', authMiddleware, userController.listar);
router.delete('/usuarios/:id', authMiddleware, userController.deletar);

module.exports = router;
