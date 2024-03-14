const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {
        style: ['login.css']
    });
});

module.exports = router;