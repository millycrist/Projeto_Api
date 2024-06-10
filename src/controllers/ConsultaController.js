const Consulta = require('../models/consulta');

async function create(req, res) {
    const consulta = new Consulta(req.body);
    try {
        const consultaCriada = await consulta.save();
        res.status(201).json(consultaCriada);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar consulta", error: error.message });
    }
}

async function getAll(req, res) {
    try {
        const consultas = await Consulta.find().populate(['paciente', 'medico']);
        res.status(200).json(consultas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consultas", error: error.message });
    }
}

async function getById(req, res) {
    try {
        const consulta = await Consulta.findById(req.params.id).populate(['paciente', 'medico']);
        if (consulta) {
            res.status(200).json(consulta);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consulta", error: error.message });
    }
}

async function update(req, res) {
    try {
        const consultaAtualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (consultaAtualizada) {
            res.status(200).json(consultaAtualizada);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar consulta", error: error.message });
    }
}

async function remove(req, res) {
    try {
        const consultaExcluida = await Consulta.findByIdAndDelete(req.params.id);
        if (consultaExcluida) {
            res.status(200).json({ mensagem: "Consulta excluída com sucesso!" });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir consulta", error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
