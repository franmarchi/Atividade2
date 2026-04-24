const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, minlength: 6 },
    idade: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema);
