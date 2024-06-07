const mongoose = require('mongoose');

const especialidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        maxlength: 255
    }
});

const Especialidade = mongoose.model('Especialidade', especialidadeSchema);

module.exports = Especialidade;
