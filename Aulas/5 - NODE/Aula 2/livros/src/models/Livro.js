const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    autor: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

    imagem: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    data_publicacao: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    editora: {
        type: DataTypes.STRING(150),
        allowNull: true
    }

}, {
    tableName: 'livros',
    timestamps: true
});

module.exports = Livro;