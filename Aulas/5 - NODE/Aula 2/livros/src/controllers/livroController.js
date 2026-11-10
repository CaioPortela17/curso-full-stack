const Livro = require('../models/Livro');

// LISTAR TODOS OS LIVROS
async function listar(req, res) {
    try {
        const livros = await Livro.findAll();

        return res.status(200).json(livros);

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro ao listar livros',
            erro: error.message
        });
    }
}


// CADASTRAR LIVRO
async function cadastrar(req, res) {
    try {
        const {
            nome,
            descricao,
            autor,
            categoria,
            imagem,
            data_publicacao,
            editora
        } = req.body;

        const livro = await Livro.create({
            nome,
            descricao,
            autor,
            categoria,
            imagem,
            data_publicacao,
            editora
        });

        return res.status(201).json({
            mensagem: 'Livro cadastrado com sucesso',
            livro
        });

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro ao cadastrar livro',
            erro: error.message
        });
    }
}


module.exports = {
    listar,
    cadastrar
};