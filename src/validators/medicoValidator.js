const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especialidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidade',
        required: true
    },
    crm: {
        type: String,
        required: true,
        unique: true
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

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
