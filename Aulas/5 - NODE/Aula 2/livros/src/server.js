const express = require('express');
const sequelize = require('./config/database');

const livroRoutes = require('./routes/livroRoutes');

const app = express();

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Rota principal dos livros
app.use('/api/livros', livroRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Livros funcionando!'
    });
});

// Inicialização do servidor
async function iniciarServidor() {
    try {

        // Testa a conexão com o banco
        await sequelize.authenticate();

        console.log('Conectado ao PostgreSQL com sucesso!');

        // Sincroniza os Models com o banco
        await sequelize.sync();

        console.log('Tabelas sincronizadas!');

        // Inicia o servidor
        app.listen(process.env.PORT || 3000, () => {
            console.log('Servidor rodando na porta 3000');
        });

    } catch (error) {
        console.error('Erro ao iniciar aplicação:', error);
    }
}

iniciarServidor();