const User = require('../models/userModel');

class UserRepository {
    async listar() {
        return await User.find();
    }

    async buscarPorId(id) {
        return await User.findById(id);
    }

    async buscarPorEmail(email) {
        return await User.findOne({ email });
    }

    async criar(dados) {
        return await User.create(dados);
    }

    async atualizar(id, dados) {
        return await User.findByIdAndUpdate(id, dados, { new: true });
    }

    async deletar(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserRepository();
