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
        unique: true
    },
    telefone: {
        type: String
    },
    endereco: {
        type: String
    }
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
