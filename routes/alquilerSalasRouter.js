const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('alquilerSalas', {
        style: ['alquilerSalas.css']
    });
});


module.exports = router;


