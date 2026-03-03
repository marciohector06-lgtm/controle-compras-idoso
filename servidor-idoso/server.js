const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());

let suprimentos = [];

app.get('/suprimentos', (req, res) => {
    res.json(suprimentos);
});

app.post('/suprimentos', (req, res) => {
    const novoItem = {
        id: Date.now(),
        nome: req.body.nome,
        idoso: req.body.idoso,
        responsavel: req.body.responsavel,
        categoria: req.body.categoria,
        urgencia: req.body.urgencia,
        obs: req.body.obs,
        status: 'Pendente'
    };
    
    suprimentos.push(novoItem);
    res.status(201).json({ mensagem: 'Item cadastrado com sucesso!', item: novoItem });
});

app.put('/suprimentos/:id', (req, res) => {
    const idItem = parseInt(req.params.id);
    const novoStatus = req.body.status;

    let itemEncontrado = false;

    suprimentos = suprimentos.map(item => {
        if (item.id === idItem) {
            itemEncontrado = true;
            return { ...item, status: novoStatus };
        }
        return item;
    });

    if (itemEncontrado) {
        res.json({ mensagem: 'Status atualizado!' });
    } else {
        res.status(404).json({ erro: 'Item não encontrado.' });
    }
});

app.listen(porta, () => {
    console.log(` Servidor rodando lisinho na porta ${porta}`);
});