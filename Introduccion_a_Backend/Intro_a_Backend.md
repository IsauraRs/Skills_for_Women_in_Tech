# Arquitectura cliente - servidor

Es un modelo de red que separa las tareas entre los integrantes del sistema.


El cliente es un integrante, realiza peticiones, el servidor es otro integrante, procesa las solicitudes y brinda respuesta al cliente.

El modelo de ejemplo es de dos capas.

![ClienteServidor](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/ClienteServidor.png)

# ¿Qué es backend?

Es la capa lógica de una aplicación que manipula y tiene acceso a los datos.

Es una capa de una aplicación sobre la que se accede y procesan los datos de acuerdo a los requisitos de una aplicación en específico. En esta capa se encuentra la conexión a la base de datos, la lógica, seguridad y protección de los datos. Esta capa no es visible al usuario.

Se encarga de procesar los datos y convertirlos en información digerible, cuantificable, que pueda usarse o que se pueda leer.

Se encarga de almacenar los datos y protegerlos al ser transferidos.

También se encarga de la transferencia de datos y la seguridad.

# Comunicación entre Back-end y Front-end

Un backend se comunica através de una API (Application Programming Interface) con el frontend. La API forma parte del backend, es la pieza fundamental.

![ComunicacionBF](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/Comunicacion.png)

# ¿Qué es una API?

Es un conjunto de funciones, métodos y reglas que cumplen con una o muchas funciones con el fin de ser consumidas por un cliente.

Es un traductor que tiene como objetivo conectar aplicaciones, un software o un sistema, intercambiando datos entre ellos.

## Tipos de APIs

Locales: se ejecutan dentro del mismo entorno o equipo. 

Remotas: se encuentran en un lugar distinto al equipo, están distribuidas, utilizan servicios web(sistema que permite la conexión entre equipos que están conectados a una misma red, los equipos tienen que compartir ciertos protocolos, el más común es HTTP). 

    SOAP (Simple Object Access Protocol) : pueden utilizar cualquier protocolo de comunicación (SMTP, TSP, etc). No son muy convencionales. Las solicitudes que llegan a la API y respuestas utilizan el formato XML.

    REST (Representational State Transfer): siguen un conjunto de reglas que hacen que sean más fáciles de diseñar / crear, requiere de URLs que respondan a solicitudes del protocolo HTTP, solo se comunican por ese protocolo, son rápidas, escalables. ligeras y las más utilizadas.

    Cuando se crea una API utilizando servicio web, utilizando una arquitectura REST, nos referimos a una API Restful, son APIs remotas que utlizan arquitectura REST.

![TiposAPIs](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/TiposAPIs.png)

## Intercambio de datos

Las APIs intercambian datos en distintos formatos, los más comunes son JSON y XML, un formato menos común es el texto plano.

XML --> Extensible Markup Language, es un formato estructurado mediante el uso de etiquetas.

JOSN --> JavaScript Object Notation, más utilizado.

Los recursos o datos de una API se consultan mediante un endpoint, es lo mismo que una URL, es una dirección única que identifica una página en internet, identifica un recurso o una función en la API.

# Métodos HTTP

Permiten interactuar con la API, los endpoints tienen un método HTTP, los más comunes son:

* GET --> para solicitar información.

* POST --> para enviar información o crear infromación nueva.

* PUT --> para actualizar información.

* DELETE --> para eliminar. 

## Códigos de estado HTTP

Cuando se consume un endpoint (se hace una solicitud a una API), el servidor responde con distintos códigos, nos indican qué pasó con la petición que se hizo.

Level 200 (Success) indican que la petición se hizo correctamente.

   * 200 : OK --> indican que la petición se hizo correctamente. (Como cuando se hace un método GET)

   * 201 : Created --> cuando se crea información

   * 203 : Non-Authoritative Information

   * 204 : No Content


Level 400 indican que hay un error en el cliente, una solicitud a un endpoint falló

   * 400 : Bad Request --> la petición no se completó.

   * 401 : Unauthorized --> no se tiene permiso para esa ruta.

   * 403 : Forbidden 

   * 404 : Not Found --> no regresan contenido porque fue eliminado.

   * 409 : Conflict 
    
Level 500 indican errores del servidor

   * 500 : Internal Server Error

   * 503 : Service Unavailable

   * 501 : Not Implemented 

   * 504 : Gateway Timout --> la petición duró mucho tiempo y se cerró la conexión para proteger.

   * 599 : Network timeout

   * 502 : Bad Gateway --> no encuentra el puerto en el que está alojada la API.

# Middleware

Es un software o bloque de código que brinda servicios y funciones a aplicaciones. Se ejecuta entre la petición que hace el usuario hasta que la peiición llega al servidor, se encargan de la mensajería de una aplicación, la seguridad, la autentificación y la gestión de una API.

# Token

Un token es una cadena alfanumérica con caracteres aparentemente aleatorios y sin ninguna relación entre si. Sirve para autentificarse en una API para consumirla. Contiene información encriptada de un usuario, se genera con una fecha de expiración, una seed (semilla) y una llave privada que solo tiene el cliente que consume el backend, con la llave se firma el token al momento de iniciar sesión.

Al momento de hacer log in se crea un token, viene encriptado en formato base 64 (método de codificación) para manejar tokens se usa un estándar JWT (Jason Web Token), es el encargado del manejo completo de los tokens, generar, decodificar, autentificar los tokens. Valida que existan los datos en la base de datos.

Los tokens son validados por el middleware.

En insomnia o en postman, en los Headers van los endpoints