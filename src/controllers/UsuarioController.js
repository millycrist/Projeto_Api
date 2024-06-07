require('dotenv').config()
const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const transporter = require('../database/transporter')

const JWT_SECRET = process.env.SECRET

async function registrar(req, res) {
    const { nome, email, senha } = req.body

    const usuarioExiste = await Usuario.findOne({ email })
    if (usuarioExiste) {
        return res.status(400).json({ mensagem: "Usuário já existe!" })
    }

    const hash = await bcrypt.hash(senha, 10)

    const usuario = new Usuario({
        nome,
        email,
        senha: hash
    })

    await usuario.save()

    const info = await transporter.sendMail({
        from: '"Nome do Remetente" <emaildoremetente@provedor.com>',
        to: 'milenahosana99@gmail.com',
        subject: 'Consulta Agendada',
        html: '<h1>Olá, sua consulta foi agendada com sucesso!</h1><p>Estamos ansiosos para te receber em nosso consultório.</p>',
        text: `Olá, sua consulta foi agendada com sucesso! Estamos ansiosos para te receber em nosso consultório.`,
    })

    console.log('E-mail enviado:', info)

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
}

async function login(req, res) {

    const { email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        return res.status(401).json({ mensagem: "Usuário não cadastrado!" })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if (!senhaValida) {
        return res.status(401).json({ mensagem: "Usuário ou senha inválidos!" })
    }

    const token = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '40m' })

    res.json(
        {
            mensagem: "Login efetuado com sucesso!",
            token
        }
    )
}

module.exports = {
    registrar,
    login
}
