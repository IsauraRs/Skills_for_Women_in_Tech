const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Se importa el archivo principal de routes
//Durante el desarrollo de una API se pueden agregar funcionalidades grandes y cambia el número de versión.
const routerApiV1 = require('./server/routes/index')

//Se crea una instancia de la clase en un objeto
const app = express();
const port = 5000; //El que está escuchando

//use es como un middleware que está constantemente activa, todas las 
//funciones debajo de él serán manipuladas/controladas por use
//muestra las peticiones
//Se esparcen automáticamente
app.use(morgan('dev')); //dev porque está en desarrollo, activa morgan en todo el proyecto
app.use(cors()); //Para activar CORS y esparcirlo en el código.
app.use( express.json()); //Para que ṕueda leer el formato JSON

//Para crear el endpoint, ('/path', lo que se va a activar)
//La función debe tener request y response 
app.get('/get' , (req , res) => {

    //El status debe ser correcto para evitar confusión
    //.send -> La respuesta que mostrará
    return res.status(200).send('Hola desde express!'); 
});

//Se agrega ruta principal, se esparce solo cuando se llama a la ruta
//Se activan todas las rutas principales
app.use("/api/v1" , routerApiV1);

//Arrow function no se escribe explícitamente la palabra function y es anónimo
app.listen(port, () => {

    console.log("Escuchando desde el puerto: " + port);

}); 


console.log("Hola!");