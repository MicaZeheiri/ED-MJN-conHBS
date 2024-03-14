const paginaRegistro = (req, res) => {
    res.render('registro', {
        style: ['login.css']
    });
}

module.exports = paginaRegistro;