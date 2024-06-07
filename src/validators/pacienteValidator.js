const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(v);
            },
            message: props => `${props.value} não é um CPF válido!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} não é um e-mail válido!`
        }
    },
    telefone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10,11}/.test(v);
            },
            message: props => `${props.value} não é um telefone válido!`
        }
    },
    endereco: {
        type: String
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
