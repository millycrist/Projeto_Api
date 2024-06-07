const express = require('express');
const router = express.Router();

// Importando os controllers
const ConsultaController = require('../controllers/ConsultaController');
const EspecialidadeController = require('../controllers/EspecialidadeController');
const MedicoController = require('../controllers/MedicoController');
const PacienteController = require('../controllers/PacienteController');
const PagamentoConsultaController = require('../controllers/PagamentoConsultaController');

// Rotas para Consultas
router.post('/consultas', ConsultaController.create);
router.get('/consultas', ConsultaController.getAll);
router.get('/consultas/:id', ConsultaController.getById);
router.put('/consultas/:id', ConsultaController.update);
router.delete('/consultas/:id', ConsultaController.remove);

// Rotas para Especialidades
router.post('/especialidades', EspecialidadeController.create);
router.get('/especialidades', EspecialidadeController.getAll);
router.get('/especialidades/:id', EspecialidadeController.getById);
router.put('/especialidades/:id', EspecialidadeController.update);
router.delete('/especialidades/:id', EspecialidadeController.remove);

// Rotas para Médicos
router.post('/medicos', MedicoController.create);
router.get('/medicos', MedicoController.getAll);
router.get('/medicos/:id', MedicoController.getById);
router.put('/medicos/:id', MedicoController.update);
router.delete('/medicos/:id', MedicoController.remove);

// Rotas para Pacientes
router.post('/pacientes', PacienteController.create);
router.get('/pacientes', PacienteController.getAll);
router.get('/pacientes/:id', PacienteController.getById);
router.put('/pacientes/:id', PacienteController.update);
router.delete('/pacientes/:id', PacienteController.remove);

// Rotas para Pagamentos de Consultas
router.post('/pagamentos-consultas', PagamentoConsultaController.create);
router.get('/pagamentos-consultas', PagamentoConsultaController.getAll);
router.get('/pagamentos-consultas/:id', PagamentoConsultaController.getById);
router.put('/pagamentos-consultas/:id', PagamentoConsultaController.update);
router.delete('/pagamentos-consultas/:id', PagamentoConsultaController.remove);

module.exports = router;
