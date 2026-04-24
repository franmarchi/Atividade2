const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const SECRET = 'segredo_super';

class AuthService {
    async login(email, senha) {
        const usuario = await userRepository.buscarPorEmail(email);

        if (!usuario) {
            throw new Error('Credenciais inválidas');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            throw new Error('Credenciais inválidas');
        }

        const token = jwt.sign(
            { id: usuario._id, email: usuario.email },
            SECRET,
            { expiresIn: '1h' }
        );

        return {
            usuario: {
                id: usuario._id,
                nome: usuario.nome,
                email: usuario.email
            },
            token
        };
    }
}

module.exports = new AuthService();
