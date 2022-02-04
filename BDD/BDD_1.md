Una base de datos es una colección que guarda información ordenada sistemáticamente que permite posteriormente extraer esta información.


Problemas que pueden presentarse si no se usa una BDD adecuada : Seguridad, Tamaño, Precisión y redundancia.


Usos e implementaciones:

* Se utilizan en:
   * Aplicaiones 
   * Sistemas informáticos


* Algunos fines:
   * Modelado de datos
   * Análisis y ciencia de datos
   * Inteligencia de negocios 


Database Management System (DBMS o SGBD):


* Oracle

* MySQL

* PostgreSQL


Tipos de BDD:

Relacionales

* Oracle

* MySQL

* PostgreSQL

* SQL Server

* Maria DB

No relacionales / NoSQL

* MongoDB

* Casandra


Otros

* Jerárquicos

* De red

* Orientados a objetos


Dentro de una base hay estructuras donde se pueden colocar los datos, que son las tablas


Las tablas tienen campos o atributos (columnas) y registros (filas)


Las tablas tienen una clave primaria (_Primary Key_), debe ser un valor único para cada elemento 


Claves foráneas (_Foreign Key_), se usan cuando se almacena información de otras tablas, es la _primary key_ de las otras tablas.


Tipos de relaciones (Cardinalidad):

* Uno a uno 1 : 1


![UnoUno](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/UnoaUno.png)


* Uno a muchos 1 : N


![UnoMuchos](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/UnoaMuchos.png)


* Muchos a muchos N : M 


Cuando se tiene una relación de 1 a muchos y la misma tabla tiene otra relación uno a muchos con otra tabla, se habla de que debe haber algo intermedio, una tabla de unión (tabla débil).


![TablaUnion](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/TablaUnion.png)


Se debe respetar ciertas reglas de restricción, como:


1. Integridad referencial no se puede encontrar un registro que no existe en las tablas.


![IntegridadRef](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/IntegridadReferencial.png)


2. Eliminación en cascada si se elimina un registro, elimina los que estén relacionados con él.


Cuando se empieza un proyecto de desarrollo, se puede seguir el siguiente flujo:

1. Analizar el negocio

2. Entender los procesos

3. Dimensionar datos

4. Tablas, campos, relaciones


### Caso práctico


Una base de datos para almacenar información referente a las órdenes que se llevan en un restaurante.


![CasoPractico](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/CasoPractico.png)


¿Qué se quiere lograr? Ayudar al cliente a tener una mejor experiencia al ordenar una comanda y que el restaurante tenga mejor control sobre los pedidos.


Dimensionando entidades:


Cliente:


* Nombre

* Correo

* Teléfono

* Dirección


Platillos:


* Nombre

* Descripción

* Ingredientes

* Precio 


Orden:


* Fecha

* Cantidad

* Importe

Por lo tanto, se tiene que guardar información de: clientes, platillos, órdenes


![CasoPractico1](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/CasoPractico1.png)


Donde los clientes pueden ver los platillos del restaurante y hacer un pedido para que pueda ser concretado en la cocina.


Diagramas entidad relación: permiten plasmar en un diagrama la información analizada

Rectángulo --> Entidad

Rombo --> La relación existente entre las entidades

Óvalo --> Atributos

Línea --> Conexiones utilizadas para representar la conexión entre los diagramas


![ER](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/DiagramasER.png)


Normalización, el diseño de la base puede ser mejorado, no se pueden saltar las formas normales.


Primera Forma Normal (1NF): 

1. Todos los atributos deben ser indivisibles, un atributo debe ser solo 1 dato, por ejemplo, en lugar de guardar el nombre completo, se puede guardar nombre, apellido 1 y apellido 2 o igual la dirección, puede dividirse en calle, colonia, ciudad, cp, etc. 

![1NF](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/1NF.png)


2. No deben existir grupos de valores repetidos, por ejemplo, si se repite el municipio varias veces, se puede crear una segunda tabla de dirección, que tenga su id, cp, Ciudad, Estado, País. O los platillos que tienen ingredientes 

![1NF1](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/1NF1.png)

Segunda Forma Normal (2NF):

1. Cualquier campo no clave debe ser dependiente de toda la clave primaria. 
Puede estar alamacenado en otra tabla.


![2NF](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/2NF.png)


![2NF1](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/2NF1.png)


Tercera Forma Normal (3NF):

1. Ningún campo no clave depende de ningún otro clave.


En este ejemplo, el aula 7B tiene ID del curso DB202 y SQL101, la capacidad del aula no depende del curso


![3NF](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/3NF.png)


![3NF1](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/BDD/Images/3NF1.png)


Tipos de datos


Cada atributo tiene un solo tipo de dato. En el diagrama de clases se incluye el tipo de dato.

Dependen del SGBD.