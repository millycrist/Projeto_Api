const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    data: Date,
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico'
    },
    especialidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidade'
    },
    pago: {
        type: Boolean,
        default: false
    }
});

const Consulta = mongoose.model('Consulta', consultaSchema);

module.exports = Consulta;
