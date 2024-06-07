const mongoose = require('mongoose');
require('dotenv').config();

// Obtém as variáveis de ambiente do arquivo .env
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

async function conectarAoMongoDB() {
    try {
        // Conecta ao MongoDB utilizando as variáveis de ambiente
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado ao banco de dados MongoDB!");
    } catch (erro) {
        console.error("Erro ao conectar ao banco de dados MongoDB:", erro);
    }
}

module.exports = conectarAoMongoDB;
