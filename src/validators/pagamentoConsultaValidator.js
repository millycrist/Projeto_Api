const mongoose = require('mongoose');

const pagamentoConsultaSchema = new mongoose.Schema({
    consulta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consulta',
        required: true
    },
    valor: {
        type: Number,
        required: true,
        min: 0
    },
    metodo: {
        type: String,
        enum: ['dinheiro', 'cartao'],
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const PagamentoConsulta = mongoose.model('PagamentoConsulta', pagamentoConsultaSchema);

module.exports = PagamentoConsulta;
