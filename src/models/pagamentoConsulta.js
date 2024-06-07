const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
    consulta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consulta',
        required: true
    },
    valor: {
        type: Number,
        required: true
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

const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;
