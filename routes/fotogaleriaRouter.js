const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('fotogaleria', {
        style: ['fotogaleria.css']
    });
});


module.exports = router;