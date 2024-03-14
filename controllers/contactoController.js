
// IMPORTAMOS LA CONECCION A LA BASE DE DATOS
const connection = require('../models/config');

const paginaContacto = (req, res) => {
    res.render('contacto', {
        style: ['contacto.css']
    });
}

const paginaFormulario = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const consulta = req.body.consulta;

    /* const persona = {
        nombre,
        apellido,
        email,
        consulta,
    } = req.body;
    
    console.log(`Los datos son: ${persona.nombre}, ${persona.consulta}`); */

    //cargo la sentencia, donde le van a asegur los datos a guardar en la database
    const sqlQuery = `INSERT INTO PERSONA SET ?`;

    const datosSql = {
        nombre: nombre,
        apellido:apellido,
        telefono: telefono,
        email: email,
        consulta: consulta,
    };

    // Ejecuta una consulta a la base de datos con el metodo query
    connection.query(sqlQuery, datosSql, (err, result) => {
        if (err) {
            console.log('Error al insertar los datos');
            console.log(err);
            res.send('Error al insertar los datos')
        } else {
            console.log('Datos ingresados correctamente');
            console.log(result);
            res.render('datosCargados', {
                style: ['index.css']
            });
        }
     });

}


const paginaListar = (req, res) => {
    const sqlQuery = `SELECT * FROM PERSONA`;
    connection.query(sqlQuery, (err, result) => {
        if (err) {
            console.log('Error al LEER los datos');
            console.log(err);
            res.send('Error al LEER los datos')
        } else {
            console.log('Datos LEIDOS correctamente');
            console.log(result);
            /* res.json({
                contactos: result
            }); */
            res.render('listarContactos', {
                style: ['clases.css'],
                persona: result
            });
        }
        });
};

module.exports = {
    paginaContacto,
    paginaFormulario,
    paginaListar,
}