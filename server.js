//importamos el servidor

const app = require('./index');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

//conexion a base de datos
const connection = require('./models/config')


/* conexion.connect();

conexion.on('error', function(err) {
    console.log('Tenemos error: ${err.message}');
})

if (conexion.connect()){
    console.log('Se conectó a mi Database');
}
 */
const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} `);
});

