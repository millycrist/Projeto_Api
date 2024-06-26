require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./src/routes/usuario.routes');
const consultaRoutes = require('./src/routes/consulta.routes');

const app = express();
const PORT = 3001;

app.use(express.json());

const mongoURI = process.env.MONGODB_URI;

const routes = require('./src/routes/usuario.routes')
app.use("/", routes)
const routes2 = require('./src/routes/consulta.routes')
app.use("/", routes2)

if (!mongoURI) {
    console.error('A variável de ambiente MONGODB_URI não está definida');
    process.exit(1); 
} 

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB', error);
    });

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/consultas', consultaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});