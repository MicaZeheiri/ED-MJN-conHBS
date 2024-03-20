const express = require('express');
const router = express.Router();
const { paginaContacto,
        paginaFormulario,
        paginaListar,
        paginaBorrar
        } = require('../controllers/contactoController');

router.get('/', paginaContacto);

router.post('/formulario', paginaFormulario); 

router.get('/listar', paginaListar); 

router.post('/borrar', paginaBorrar);

module.exports = router;

