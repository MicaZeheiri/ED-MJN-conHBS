const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registro', {
        style: ['login.css']
    });
});


module.exports = router;
