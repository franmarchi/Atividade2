const User = require('../models/userModel');

class UserRepository {
    constructor() {
        this.usuarios = [
            new User(1, "Ana Silva", "ana.silva@email.com", 28),
            new User(2, "Bruno Costa", "bruno.costa@email.com", 35),
            new User(3, "Carla Souza", "carla.souza@email.com", 22),
            new User(4, "Diego Almeida", "diego.almeida@email.com", 31),
            new User(5, "Eduarda Lima", "eduarda.lima@email.com", 27),
            new User(6, "Felipe Rocha", "felipe.rocha@email.com", 40),
            new User(7, "Gabriela Martins", "gabriela.martins@email.com", 24),
            new User(8, "Henrique Fernandes", "henrique.fernandes@email.com", 29),
            new User(9, "Isabela Ribeiro", "isabela.ribeiro@email.com", 33),
            new User(10, "João Pedro Santos", "joao.santos@email.com", 26)
        ];

        this.proximoId = this.usuarios.length + 1;
    }

    listar() {
        return this.usuarios;
    }

    buscarPorId(id) {
        return this.usuarios.find(u => u.id === id);
    }

    buscarPorEmail(email) {
        return this.usuarios.find(u => u.email === email);
    }

    criar(nome, email, idade) {
        const novoUsuario = new User(this.proximoId++, nome, email, idade);
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    atualizar(id, nome, email, idade) {
        const usuario = this.buscarPorId(id);
        if (!usuario) return null;

        usuario.nome = nome;
        usuario.email = email;
        usuario.idade = idade;

        return usuario;
    }

    deletar(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) return false;

        this.usuarios.splice(index, 1);
        return true;
    }
}

module.exports = new UserRepository();