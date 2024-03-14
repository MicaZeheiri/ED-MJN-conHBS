const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('alumno', {
        style: ['alumno.css', 'index.css']
    });
});


module.exports = router;