const Especialidade = require('../models/especialidade');

async function create(req, res) {
    const especialidade = new Especialidade(req.body);
    try {
        const especialidadeCriada = await especialidade.save();
        res.status(201).json(especialidadeCriada);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar especialidade", error });
    }
}

async function getAll(req, res) {
    try {
        const especialidades = await Especialidade.find();
        res.json(especialidades);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar especialidades", error });
    }
}

async function getById(req, res) {
    try {
        const especialidade = await Especialidade.findById(req.params.id);
        if (especialidade) {
            res.json(especialidade);
        } else {
            res.status(404).json({ mensagem: "Especialidade não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar especialidade", error });
    }
}

async function update(req, res) {
    try {
        const especialidadeAtualizada = await Especialidade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (especialidadeAtualizada) {
            res.json(especialidadeAtualizada);
        } else {
            res.status(404).json({ mensagem: "Especialidade não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar especialidade", error });
    }
}

async function remove(req, res) {
    try {
        const especialidadeExcluida = await Especialidade.findByIdAndDelete(req.params.id);
        if (especialidadeExcluida) {
            res.json({
                mensagem: "Especialidade excluída com sucesso!",
                especialidadeExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Especialidade não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir especialidade", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
