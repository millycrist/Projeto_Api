const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String
    },
    endereco: {
        type: String
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
