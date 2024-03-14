const paginaLogin = (req, res) => {
    res.render('login', {
        style: ['login.css']
    });
}

module.exports = paginaLogin;