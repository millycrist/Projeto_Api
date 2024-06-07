const express = require('express')
const app = express()
const PORT = 3000

const DBconnection = require('./src/database/connection')
DBconnection()

app.use(express.json())

const autenticacaoRoutes = require('./src/routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./src/validators/AutenticacaoValidator')

const routes = require('./src/routes/routes')
app.use("/", checarToken, routes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
