const express = require('express');
const roteador = express.Router();

// Importando os controladores
const ConsultaController = require('../controllers/ConsultaController');
const EspecialidadeController = require('../controllers/EspecialidadeController');
const MedicoController = require('../controllers/MedicoController');
const PacienteController = require('../controllers/PacienteController');
const PagamentoConsultaController = require('../controllers/PagamentoConsultaController');

// Rotas para Consultas
roteador.post('/consultas', ConsultaController.create);
roteador.get('/consultas', ConsultaController.getAll);
roteador.get('/consultas/:id', ConsultaController.getById);
roteador.put('/consultas/:id', ConsultaController.update);
roteador.delete('/consultas/:id', ConsultaController.remove);

// Rotas para Especialidades
roteador.post('/especialidades', EspecialidadeController.create);
roteador.get('/especialidades', EspecialidadeController.getAll);
roteador.get('/especialidades/:id', EspecialidadeController.getById);
roteador.put('/especialidades/:id', EspecialidadeController.update);
roteador.delete('/especialidades/:id', EspecialidadeController.remove);

// Rotas para Médicos
roteador.post('/medicos', MedicoController.create);
roteador.get('/medicos', MedicoController.getAll);
roteador.get('/medicos/:id', MedicoController.getById);
roteador.put('/medicos/:id', MedicoController.update);
roteador.delete('/medicos/:id', MedicoController.remove);

// Rotas para Pacientes
roteador.post('/pacientes', PacienteController.create);
roteador.get('/pacientes', PacienteController.getAll);
roteador.get('/pacientes/:id', PacienteController.getById);
roteador.put('/pacientes/:id', PacienteController.update);
roteador.delete('/pacientes/:id', PacienteController.remove);

// Rotas para Pagamentos de Consultas
roteador.post('/pagamentos-consultas', PagamentoConsultaController.create);
roteador.get('/pagamentos-consultas', PagamentoConsultaController.getAll);
roteador.get('/pagamentos-consultas/:id', PagamentoConsultaController.getById);
roteador.put('/pagamentos-consultas/:id', PagamentoConsultaController.update);
roteador.delete('/pagamentos-consultas/:id', PagamentoConsultaController.remove);

module.exports = roteador;
