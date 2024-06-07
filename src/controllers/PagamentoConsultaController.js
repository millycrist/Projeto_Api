const PagamentoConsulta = require('../models/pagamentoConsulta');

async function create(req, res) {
    const pagamento = new PagamentoConsulta(req.body);
    try {
        const pagamentoCriado = await pagamento.save();
        res.status(201).json(pagamentoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar pagamento de consulta", error });
    }
}

async function getAll(req, res) {
    try {
        const pagamentos = await PagamentoConsulta.find().populate('consulta');
        res.json(pagamentos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pagamentos de consulta", error });
    }
}

async function getById(req, res) {
    try {
        const pagamento = await PagamentoConsulta.findById(req.params.id).populate('consulta');
        if (pagamento) {
            res.json(pagamento);
        } else {
            res.status(404).json({ mensagem: "Pagamento de consulta não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pagamento de consulta", error });
    }
}

async function update(req, res) {
    try {
        const pagamentoAtualizado = await PagamentoConsulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pagamentoAtualizado) {
            res.json(pagamentoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Pagamento de consulta não encontrado!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar pagamento de consulta", error });
    }
}

async function remove(req, res) {
    try {
        const pagamentoExcluido = await PagamentoConsulta.findByIdAndDelete(req.params.id);
        if (pagamentoExcluido) {
            res.json({
                mensagem: "Pagamento de consulta excluído com sucesso!",
                pagamentoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Pagamento de consulta não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir pagamento de consulta", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
