const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');
const authService = require('../services/authService');

class UserController {

    async registrar(req, res) {
        try {
            const { nome, email, senha, idade } = req.body;

            const senhaHash = await bcrypt.hash(senha, 10);

            const usuario = await userRepository.criar({
                nome,
                email,
                senha: senhaHash,
                idade
            });

            return res.status(201).json(usuario);

        } catch (error) {
            return res.status(400).json({ mensagem: error.message });
        }
    }

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const resultado = await authService.login(email, senha);
            return res.status(200).json(resultado);

        } catch (error) {
            return res.status(401).json({ mensagem: error.message });
        }
    }

    async listar(req, res) {
        const usuarios = await userRepository.listar();
        return res.json(usuarios);
    }

    async atualizar(req, res) {
    const id = req.params.id;
    const dados = req.body;

    try {
        const usuario = await userRepository.atualizar(id, dados);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        return res.status(200).json(usuario);

    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
}

    async deletar(req, res) {
        const id = req.params.id;

        const usuario = await userRepository.deletar(id);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        return res.json({ mensagem: 'Usuário deletado' });
    }
}

module.exports = new UserController();
