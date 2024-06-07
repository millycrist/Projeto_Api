const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
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
    senha: {
        type: String,
        required: true,
        minlength: 6
    }
});

const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;
