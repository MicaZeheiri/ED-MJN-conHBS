const express = require('express');
const router = express.Router();
const paginaLogin = require('../controllers/loginController')

router.get('/', paginaLogin);

module.exports = router;