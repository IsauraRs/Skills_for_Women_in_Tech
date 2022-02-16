# Introducción a desarrollo web


En el desarrollo web actual se maneja una arquitectura cliente/servidor, el cliente (usualmente el navegador web o dispositivo) es el que da una interfaz de comunicación con el servidor.


Esta arquitectura cliente servidor podemos encontrarla en el desarrollo web como Backend y Frontend.


## Backend


Se puede encontrar en la parte del servidor, esta capa es la que se encarga de procesar los datos e información que responderá al frontend o al cliente que la esté solicitando.


A esta capa normalmente no tiene acceso directo el usuario final, es la que se comunica por ejemplo, con las bases de datos y otros componentes.


Si lo vemos como capas, se tiene la capa de frontend, backend y la de acceso a datos, esta última capa es con la que interactúa el backend.


Solemos encontrar lenguajes de programación y frameworks como:

* Python (Django, Flask FastAPI, Bottle)

* Ruby (RoR, Sinatra)

* PHP (Laravel)

* Java (Spring)

* JavaScript (NodeJS, Express)

* C# (WebAPI, ASP.NET)


### Web monolítica


En un inicio la  arquitectura de las aplicaciones web a pesar de trabajar como cliente/servidor se manejaba una estructura de aplicación monolítica.


La aplicación web se encargaba de mostrar y procesar el frontend y el backend, desde el lado del servidor se podía manejar qué se mostraría en el lado del frontend y trabajar también el backend.

![WebMonolítica]()


### Servicios web y API web


Con el uso y desarrollo de servicios web se comenzó a separar ésta estructura más a nivel de aplicación, algo más parecido al modelo cliente/servidor o parecido al modelo **MVC (Model View Controller)**,es un patrón de diseño que permite separar las capas en acceso a datos, vista y controladores, lo que hace un poco más tolerante a fallos


Con esta separación y continuo desarrollo de servicios web, pasamos a arquitecturas REST y con ello el desarrollo de APIs web.


Interfaces web que pueden ser consumidas por cualquier cliente.


Se da acceso a ciertos recursos de forma controlada a través de una estructura de URLs, métodos http y autorizaciones.


## API REST

REST, REpresentational State Transfer, es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP.


REST permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo o cliente que entienda HTTP, por lo que es increíblemente más simple y convencional que otras alternativas que se han usado en los últimos diez años como SOAP y XML-RPC.


![APIREST]()


Una API es una interfaz, una web API es una interfaz web para poder comunicar con un servicio web.


Se puede utilizar una API REST para comunicar con microservicios.


En la capa de procesamiento de datos y acceso de datos, se separa en un microservicio para acceso de datos y otro para capa de procesamiento de , cada capa tiene su propia fuente y almacenamiento de datos.


Una capa puede consumir más de una API, pero aumenta la complejidad.


Con programas como Postman o Insomnia se pueden hacer peticiones a APIs

El uso de aplicaciones monolíticas o no monolíticas depende de las necesidades del proyecto.


## Frontend


Se puede encontrar en la parte del cliente, puede ser un navegador web o un dispositivo como tablets o smartphones, y no solo se reduce a lo web, una aplicación móvil que consume un backend también es un frontend o cliente.


En la actualidad se habla de UX/UI en temas de frontend para mejorar la experiencia de usuario y la usabilidad de éstas interfaces.


En frontend solemos encontrar lenguajes y tecnologías como:


* JavaScript

* CSS

* HTML5

* Angular

* React

* Vue


