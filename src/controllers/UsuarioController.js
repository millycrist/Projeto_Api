const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../database/transporter');
require('dotenv').config();

const JWT_SECRET = process.env.SECRET;

async function registrar(req, res) {
    try {
        const { nome, email, senha } = req.body;

        // Verifica se o usuário já existe
        const usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.status(400).json({ mensagem: "Usuário já existe!" });
        }

        // Gera o hash da senha
        const hash = await bcrypt.hash(senha, 10);

        // Cria um novo usuário
        const novoUsuario = new Usuario({
            nome,
            email,
            senha: hash
        });

        // Salva o novo usuário no banco de dados
        await novoUsuario.save();

        // Envia um e-mail de boas-vindas para o novo usuário
        const info = await transporter.sendMail({
            from: '"Nome do Remetente" <emaildoremetente@provedor.com>',
            to: email, // Envia o e-mail para o usuário registrado
            subject: 'Cadastro Realizado com Sucesso',
            html: '<h1>Bem-vindo!</h1><p>Seu cadastro foi realizado com sucesso.</p>',
            text: 'Bem-vindo! Seu cadastro foi realizado com sucesso.',
        });

        console.log('E-mail enviado:', info);

        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

async function login(req, res) {
    try {
        const { email, senha } = req.body;

        // Busca o usuário pelo e-mail
        const usuario = await Usuario.findOne({ email });

        // Verifica se o usuário existe
        if (!usuario) {
            return res.status(401).json({ mensagem: "Usuário não cadastrado!" });
        }

        // Compara a senha fornecida com a senha armazenada
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        // Verifica se a senha é válida
        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Usuário ou senha inválidos!" });
        }

        // Gera um token JWT
        const token = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '40m' });

        res.json({
            mensagem: "Login efetuado com sucesso!",
            token
        });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

module.exports = {
    registrar,
    login
};
