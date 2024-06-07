const Paciente = require('../models/paciente');

async function create(req, res) {
    const paciente = new Paciente(req.body);
    try {
        const pacienteCriado = await paciente.save();
        res.status(201).json(pacienteCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar paciente", error });
    }
}

async function getAll(req, res) {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pacientes", error });
    }
}

async function getById(req, res) {
    try {
        const paciente = await Paciente.findById(req.params.id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar paciente", error });
    }
}

async function update(req, res) {
    try {
        const pacienteAtualizado = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pacienteAtualizado) {
            res.json(pacienteAtualizado);
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar paciente", error });
    }
}

async function remove(req, res) {
    try {
        const pacienteExcluido = await Paciente.findByIdAndDelete(req.params.id);
        if (pacienteExcluido) {
            res.json({
                mensagem: "Paciente excluído com sucesso!",
                pacienteExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir paciente", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
