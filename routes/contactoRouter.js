const express = require('express');
const router = express.Router();
const { paginaContacto,
        paginaFormulario,
        paginaListar
        } = require('../controllers/contactoController');

router.get('/',paginaContacto);

router.post('/formulario', paginaFormulario); 

router.get('/listar', paginaListar); 

module.exports = router;

