const userRepository = require('../repositories/userRepository');

class UserController {

    listar(req, res) {
        return res.status(200).json({
            sucesso: true,
            dados: userRepository.listar()
        });
    }

    buscarPorId(req, res) {
        const id = parseInt(req.params.id);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido'
            });
        }

        const usuario = userRepository.buscarPorId(id);

        if (!usuario) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Usuário não encontrado'
            });
        }

        return res.status(200).json({
            sucesso: true,
            dados: usuario
        });
    }

    criar(req, res) {
        const { nome, email, idade } = req.body;

        if (!nome || !email || idade === undefined) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nome, email e idade são obrigatórios'
            });
        }

        if (typeof idade !== 'number' || idade <= 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Idade inválida'
            });
        }

        const emailExiste = userRepository.buscarPorEmail(email);

        if (emailExiste) {
            return res.status(409).json({
                sucesso: false,
                mensagem: 'Email já cadastrado'
            });
        }

        const novoUsuario = userRepository.criar(nome, email, idade);

        return res.status(201).json({
            sucesso: true,
            mensagem: 'Usuário criado com sucesso',
            dados: novoUsuario
        });
    }

    atualizar(req, res) {
        const id = parseInt(req.params.id);
        const { nome, email, idade } = req.body;

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido'
            });
        }

        const usuarioExistente = userRepository.buscarPorId(id);

        if (!usuarioExistente) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Usuário não encontrado'
            });
        }

        const usuarioAtualizado = userRepository.atualizar(id, nome, email, idade);

        return res.status(200).json({
            sucesso: true,
            mensagem: 'Usuário atualizado com sucesso',
            dados: usuarioAtualizado
        });
    }

    deletar(req, res) {
        const id = parseInt(req.params.id);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido'
            });
        }

        const removido = userRepository.deletar(id);

        if (!removido) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Usuário não encontrado'
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: 'Usuário removido com sucesso'
        });
    }
}

module.exports = new UserController();