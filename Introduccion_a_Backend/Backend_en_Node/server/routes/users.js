//Ruta principal de usuarios, CRUD principal de usuarios.
//Por cada ruta debe haber un controlador. Se hace un archivo con el mismo nombre en controllers

const { Router } = require('express'); 
const router = Router();

const { getUsers , createUsers , updateUsers , deleteUsers } = require("../controllers/users");

//ruta , controlador
//Con get se lee información
router.get("/get" , getUsers); //Ruta estática, no cambia
//Con post se crea información
router.post("/post" , createUsers);
//Con put se edita información existente
//router.put("/update" , updateUsers);
//Para mandar un id o información por el parámetro de forma interactiva se agrega /: y el nombre
//del dato que se quiere arapar, como el id y se hace lo mismo con delete
router.put("/update/:id" , updateUsers); //Ruta dinámica, tiene un valor dinámico y va cambiando
//Los dos puntos (:) indican que es un valor dinámico.
//Con delete se elimina información
//router.delete("/delete" , deleteUsers);
router.delete("/delete/:id" , deleteUsers);

//Se exporta la variable que ya contiene todo 
module.exports = router;