# Node JS 

Es un entorno de ejecución (no se requiere de un navegador para ejecutarlo) de JavaScript de código abierto y multiplataforma. Viene acompañado de npm (Node Package Manager).

## npm

Node Package Manager es la herramienta por defecto de JS para la tarea de compartir e instalar paquetes.

Ayuda a administrar nuestros módulos, distribuir paquetes y agregar dependencias a nuestro proyecto.

## Características principales

* Motor V8 --> Creado por Google en 2008 para Chrome, es una forma en donde se corre el código de JavaScript y Node JS.

* Velocidad --> Tiempo de ejecución rápida. Aparte de ser muy simple.

* npm --> Administrador de paquetes predeterminados para NodeJS.

* Orientado a eventos --> Hay un bucle de eventos que se ejecuta constantemente. Eso significa que podemos programar con la lógica de "Cuando sucede algo, se ejecuta esta parte del código y eso a su vez dispara otra parte". Se puede programar de forma reactiva.

* Concurrencia --> Es monohilo con entradas y salidas asíncronas.

* Plataforma asíncrona --> Funciona de forma asincrónica, significa que no va a bloquearse el bucle ni la aplicación.

## Event Queue

Se va haciendo una pila o cola de los eventos (función, petición, llamada a la BD, declaración de variable).

Contiene todos los eventos que se generan por nuestro código, estos quedan en una cola que van pasando uno a uno al Event Loop.

## Event Loop

Es el ciclo de eventos, no se detiene. Se encarga de resolver los eventos rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, envía el evento al Thread Pool.

Un evento rápido puede ser una función que sume dos variables o un evento que se encargue de declarar una variable.

Un evento pesado puede ser una llamada a la BD, a un servidor externo, una función asíncrona, petición para revisar archivos de la máquina, etc.

## Thread Pool

Se encarga de gestionar los eventos pesados de forma asíncrona. Una vez terminado lo devuelve al Event Loop.

Cada evento lo separa en un hilo individual y en cada hilo, el proceso por separado espera a que se resuelva. El event loop agarra el evento resuelto y mandarlo al event queue o mandar la respuesta. Suponiendo una variable que depende de otra variable y la variable que depende es asíncrona, por lo que primero se resuelve la variable asíncrona y una vez resuelta se manda al event loop.

![NodeJS](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/Node.png)

El Thread Pool en ningún momento bloquea al hilo principal.

## Diferencias entre: librería, framework, paquete y módulo.

* Librería: proporciona una serie de funciones y métodos muy concretos para simplificar tareas complejas.

* Framework: es más que una librería, porque aporta una estructura completa en la que nosotros "encajamos" nuestro código, impone las condiciones y reglas.

* Paquete: es un archivo o directorio que se describe en el package.json

* Módulo: es cualquier archivo o directorio que Node.js puede cargar con el método require().

El código debe modularizarse para que se separe el código por su funcionalidad.

## Express

Es un framework rápido, sencillo y minimalista de backend para Nodejs.

Diseñado para construir aplicaciones web y APIs.

Es muy flexible a la hora de estructurar el código, no es tan complejo.

El archivo index.js es el archivo principal, el que se va a ejecutar. 

Para correr el archivo --> node nombre_archivo

Node JS, el framework y JavaScript son distintos, Node JS y express van de la mano.

npm i package_name

o

npm install package_name

Primero se instala y configura node js dentro de la carpeta --> npm init -y (da un archivo ya custimizado), de otro modo npm init pregunta nombre, etc. Se agrega el archivo de configuración de Node JS (package.json)

package-lock.json es información acerca de los paquetes que se usan

La carpeta node_modules es en donde vienen todas las funciones y métodos de las dependencias que se van instalando.

Si se borra el package.json o el node_modules el proyecto no funcionará.

nodemon vigila el código y si hay un cambio, lo actualiza

nodemon index --> espera por los cambios, está escuchando constantemente

para levantar el servidor con express: 

``` JS
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

Casi todo se lleva con constantes en Node, para llamar el framework se crea una constante

Para resolver el problema nodemon: orden no encontrada:

sudo npm install -g nodemon

## CORS

Cross-Origin Resource Sharing

Es una medida de seguridad.

Los orígenes permitidos pueden acceder a los recursos del servidor.

Mecanismo en el cual aprobamos qué orígenes pueden hacer peticiones.

El backend debe aprobarlos.

El origen es la URL del cliente.

White list --> lista en donde están los orígenes aprobatorios para consumir el backend o API.

En la carpeta server están las características y funcionalidades principales de node, como:

  * routes --> contiene las rutas que se van a liberar al backend para que puedan acceder desde el cliente. Se crea un archivo index.js, archivo principal de esa ruta para controlar las rutas, para cada característica del frontend. Por cada tabla o modelo en la base de datos se crea una ruta y un controlador, es recomendable el index de routes para que sea más organizado el código. 

  * controllers --> un controlador es un mecanismo que se encarga de administrar o gestionar las peticiones del cliente, escucha lo que el cliente pide (request) y envía respuestas. Está apegado a la BD, mediante los controladores se hacen llamadas a queries a la BD, se puede consumir un servicio externo.

Para exportar se puede hacer de manera individual con:

``` JS
module.exports = router;
```

O con llaves si un archivo tiene muchos métodos o funciones a exportar 

``` JS
module.exports = {

  getUsers,

};
```
Los controladores de Update y Delete tienen una peculiaridad, en el update y delete, se sabe qué dato actualizar o eliminar a partir del ID, desde el frontend se recibe esta información con el request, también se manda información mediante querys y params del body.

Para mandar algo desde insomnia o postman --> en body seleccionar JSON 

Para actualizar un dato en update, el dato tiene el id 1
http://localhost:5000/api/v1/users/update/1

Es recomendable poner rutas claras para el frontend

http://localhost:5000/api/v1/users/get?page=100 para hacer un query, en este caso se le pide 100 usuarios.

http://localhost:5000/api/v1/users/get?page=100&name=Fernando para traer 100 usuarios cuyo nombre sea Fernando.

No es necesario especificar lo query en las rutas, es un opcional