const getUsers = (req , res) => {

    //Para saber en qué parte del código falló
    try{

        //Es común agregar el query para hacer paginación
        //const query = req.query;
        //Se puede desestructurar:
        const { page , name } = req.query;

        //console.log(query);
        console.log(page , name);

        return res.status(200).send('Users found successfully');

    } catch (error) {

        return res.status(404).send(error.message); //Error message manda el mensaje específico
    }
};

const createUsers = (req , res) => {

    //Para saber en qué parte del código falló
    try{

        //const body = req; //Si se deja solo eso trae mucho código
        //const body = req.body; //Para leer el body de json enviado

        //console.log(body);
        //Se puede desestructurar el código anterior:
        const { name , email } = req.body;

        console.log(name , email);

        return res.status(200).send('User created successfully');

    } catch (error) {

        return res.status(404).send(error.message); //Error message manda el mensaje específico
    }
};

const updateUsers = (req , res) => {

    //Para saber en qué parte del código falló
    try{

        const { body , params } = req;

        console.log(body);
        console.log(params.id);

        return res.status(200).send('User updated successfully');

    } catch (error) {

        return res.status(404).send(error.message); //Error message manda el mensaje específico
    }
};

const deleteUsers = (req , res) => {

    //Para saber en qué parte del código falló
    try{

        const { id } = req.params;

        return res.status(200).send('User deleted successfully with id: ' + id);

    } catch (error) {

        return res.status(404).send(error.message); //Error message manda el mensaje específico
    }
};



//Se debe exportar y posteriormente importar en routes.
module.exports = {

    getUsers,
    createUsers,
    updateUsers,
    deleteUsers,
    
};

