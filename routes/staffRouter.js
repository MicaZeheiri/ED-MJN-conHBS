const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('staff', {
        style: ['staff.css']
    });
});


module.exports = router;
