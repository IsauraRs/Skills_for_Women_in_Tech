python-decouple permite generar variables de entorno a partir de un archivo .m al que se le indica qué variables de entorno o datos necesitamos almacenar en un lugar seguro para que no estén expuestos.

Generar proyecto --> django-admin startproject project_name

**No modificar archivo manage.py es el archivo que sirve para correr los comandos de django**

Archivo \_\_init\_\_.py regularmente está vacío, sirve para que reconozca la carpeta como parte de los módulos del proyecto

El archivo asgi se usa cuando ya se pone en producción, para poner en producción conexiones asíncronas, web sockets

Archivo wsgi.py se usa cuando se pasa a producción, durante el desarrollo no se usa pero debe conocerse.

Archivo urls.py ahí se ponen las urls que se van generando de acuerdo a las necesidades que se tengan, se pueden agregar más archivos

Archivo settings.py es el más importante, es donde se va configurando lo que se va haciendo para poder ejecutar el proyecto de forma exitosa.

   * BASE_DIR es una constante que indica la ubicación en donde está el directorio padre, se construye a partir del archivo que se ejecuta, generalmente es el manage.py va dos directorios hacia arriba y ese lo toma como directorio padre y apartir de ahí va buscando los archivos que se necesitan, hay que pasarle rutas enteras de dónde están los archivos necesarios.

   * SECRET_KEY es una linea aleatoria de caracteres utilizada para cuestiones de seguridad del proyecto, se usa cuando se generan contraseñas para los usuarios y hay que tenerlo en un entorno seguro, puede ser el de django o uno generado, se recomienda mantenerlo en un .m o en variable de entorno y que no esté directamente en el código para que pueda manejarse de manera más discreta.

   * DEBUG es la variable que indica si la aplicación se encuentra en producción o en desarrollo, cuando está en True es que la aplicación está en desarrollo, muestra el stack de errores, si se cambia a False no muestra el stack de errores, solo indica que hay un error. Se recomienda tenerla como variable de entorno para modificarla dependiendo del entorno y no modificar el código directamente.

   * ALLOWED_HOST se utiliza en un entorno de producción, se indica el dominio o IP que se utilizará para el proyecto en específico, cuando está en desarrollo se puede poner [' * '] para indicar que tome de cualquier parte y se puedan hacer peticiones necesarias hacia ese proyecto, cuando se pasa a producción se pasa el dominio.

   * INSTALLED_APPS están todas las apps instaladas, las de django, third parties (third party) y las que se van generando para el proyecto (como rest_framework).

   * MIDDLEWARE son procesos que se ejecutan entre que se hace la petición y se llega a la vista, hay procesos de seguridad, autenticación, etc., dependiendo del nievel de seguridad que se tenga. También se pueden agregar middlewares propios, como un middleware que tome cada petición y se pueda llevar un track del número de veces que se accede a ciertas vistas.

   * ROOT_URLCONF nos dice cuál es el URL raíz que va a tomar.

   * TEMPLATES son templates HTML que maneja django porque está pensado como framework fullstack.

   * WSGI_APPLICATION es una variable para indicar dónde está el wsgi para que, cuando esté en producción, lo encuentre fácilmente.

   * DATABASES Por default va con una base de sqlite3, hay que indicar en dónde está el archivo, no requiere que se monte un servicio de bases de datos. Lo genera al momento de ejecutar la aplicación. Se puede cambiar a otro motor de BD, pide el engine y el nombre de la base de datos. En postgres hay que poner host, password, puerto y usuario.

   * AUTH_PASSWORD_VALIDATORS se encarga de validar que los passwords que se introducen cumplan con ciertos estándares para que sean seguros, entre ellos:

      * UserAttributeSimilarityValidator: verifica que la contraseña no sea igual al nombre de usuario.

      * MinimumLengthValidator: valida el tamaño del password.

      * CommonPasswordValidator: valida que el password no sea muy conocido.

      * NumericPasswordValidator: valida que el password no sea solo números.

   * LANGUAGE_CODE lo toma dependiendo de la configuración del equipo, si está en inglés aparece 'en', si está en español es 'es' y depende del país.

   * TIME_ZONE 'UTC' es el neutral(0:0), se puede cambiar al time zone de la zona, e.g., 'America/Mazatlan'

   * STATIC_URL se usa para la parte de front, donde genera los archivos estáticos, CSS, etc, se indica dónde están alojados, también el media url para almacenar imágenes.

   * DEFAULT_AUTO_FIELD es para indicar a los modelos que las tablas generadas en la bd, los ID serán big int, para que no haya problemas a futuro.

python3 manage.py runserver 0.0.0.0:8000 

para correrlo o 

python3 manage.py runserver 0:8000

Cuando se genera el proyecto por primera vez hay migraciones, que son la parte de las tablas que deberían estar generadas en la BD para correr por primera vez el proyecto exitosamente. Hay que generarlas para que no aparezca el warning. Para hacer las migraciones con el siguiente comando:

python3 manage.py migrate

Se crea el archivo db.sqlite3

Se puede configurar más de una base de datos 

Si se ingresa a localhost:8000 y todo está correcto muestra la siguiente pantalla: 

![django1](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/django1.png)

Ya que está corriendo el entorno, si se ingresa a localhost:8000/admmin, despliega la siguiente pantalla:

![login](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/login.png)

Para crear un usuario: 

python3 manage.py createsuperuser 

Solicitará un username, email address y password, se vuelve a correr el entorno, si se ingresan los datos de log in mostrará lo siguiente:

![userLog](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Introduccion_a_Backend/images/userLog.png)

## Creando una app

python3 manage.py startapp app1 

No se genera el archivo urls pero es recomendable generarlo dentro de cada app para tener más orden.

Cada cambio que se haga en models generará archivos en migrations, que indica a la bd la estructura de las tablas y modelos y así se pueda comunicar eficientemente la aplicación y la BD.