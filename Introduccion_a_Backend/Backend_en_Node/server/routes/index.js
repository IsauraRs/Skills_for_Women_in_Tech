const { Router } = require('express'); //método de express, se desestructura, es decir, se toma específicamente un pedazo de un objeto
//Se invoca y activa Router, se hereda todo de Router a la variable.
const router = Router();

//Se importa el archivo, con require se pueden importar módulos propios
const usersRouter = require('./users');

//Cada que se llame esa ruta, se activa ese archivo
router.use("/users" , usersRouter);

//Se debe exportar la constante router para que esté disponible en todo el proyecto.
//Si no se hace no estarán disponibles los endpoints.
module.exports = router;