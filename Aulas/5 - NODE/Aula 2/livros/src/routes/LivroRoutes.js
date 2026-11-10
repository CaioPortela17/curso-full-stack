const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController');

// GET - Listar todos
router.get('/', livroController.listar);

// POST - Cadastrar
router.post('/', livroController.cadastrar);

module.exports = router;