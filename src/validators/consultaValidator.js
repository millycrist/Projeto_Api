const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                return v && v.getTime() > Date.now();
            },
            message: props => `${props.value} não é uma data válida para consulta!`
        }
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    especialidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidade',
        required: true
    },
    pago: {
        type: Boolean,
        default: false
    }
});

const Consulta = mongoose.model('Consulta', consultaSchema);

module.exports = Consulta;
