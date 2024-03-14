const express = require('express');
const router = express.Router();
const paginaRegistro = require('../controllers/registroController')

router.get('/', paginaRegistro);

module.exports = router;
