const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const { usuarioValidador, loginValidador } = require('../validators/usuarioValidator');

router.post('/registro', usuarioValidador, UsuarioController.registrar);
router.post('/login', loginValidador, UsuarioController.login);

module.exports = router;
