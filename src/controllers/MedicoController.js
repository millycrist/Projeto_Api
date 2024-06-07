const Medico = require('../models/medico');

async function create(req, res) {
    const medico = new Medico(req.body);
    try {
        const medicoCriado = await medico.save();
        res.status(201).json(medicoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar médico", error });
    }
}

async function getAll(req, res) {
    try {
        const medicos = await Medico.find().populate('especialidade');
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar médicos", error });
    }
}

async function getById(req, res) {
    try {
        const medico = await Medico.findById(req.params.id).populate('especialidade');
        if (medico) {
            res.json(medico);
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar médico", error });
    }
}

async function update(req, res) {
    try {
        const medicoAtualizado = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (medicoAtualizado) {
            res.json(medicoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar médico", error });
    }
}

async function remove(req, res) {
    try {
        const medicoExcluido = await Medico.findByIdAndDelete(req.params.id);
        if (medicoExcluido) {
            res.json({
                mensagem: "Médico excluído com sucesso!",
                medicoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir médico", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
