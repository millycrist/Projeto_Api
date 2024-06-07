const Consulta = require('../models/consulta');

async function create(req, res) {
    const consulta = new Consulta(req.body);
    try {
        const consultaCriada = await consulta.save();
        res.status(201).json(consultaCriada);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar consulta", error });
    }
}

async function getAll(req, res) {
    try {
        const consultas = await Consulta.find().populate(['paciente', 'medico']);
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consultas", error });
    }
}

async function getById(req, res) {
    try {
        const consulta = await Consulta.findById(req.params.id).populate(['paciente', 'medico']);
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consulta", error });
    }
}

async function update(req, res) {
    try {
        const consultaAtualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (consultaAtualizada) {
            res.json(consultaAtualizada);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar consulta", error });
    }
}

async function remove(req, res) {
    try {
        const consultaExcluida = await Consulta.findByIdAndDelete(req.params.id);
        if (consultaExcluida) {
            res.json({
                mensagem: "Consulta excluída com sucesso!",
                consultaExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir consulta", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
