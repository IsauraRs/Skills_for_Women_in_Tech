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

Modelo --> interacción que se tiene entre el código y la base de datos.

SQLite3 no pide un host porque está en el mismo directorio.

El nombre de la tabla es generado por Django a partir del nombre de la aplicación junto con el nombre del modelo, si se quiere dar un nombre a la tabla, se debe poner una subclase y dentro el parámetro db_table = nombre_tabla

Si se ejecuta python3 manage.py makemigrations no sucede nada debido a que hasta ahora no se ha indicado a Django que existe el modelo, para hacerlo, en settings.py, en la parte de INSTALLED_APPS se agrega el nombre de la aplicación, entonces cuando se ejecute makemigrations hará la migración y creará el modelo del libro, crea un archivo 0001_initial.py, donde está la definición del modelo, si no se crea un ID, Django lo crea.

Para ver lo que hará la migración antes de que se vaya a la BD, lo que va a ejecutar el migrate: 

python3 manage.py sqlmigrate nombre_app númeroDelArchivoCreadoDespuésDeMakeMigrations

por ejemplo:

python3 manage.py sqlmigrate books 0001

Da el SQL que genera para crear el modelo.

Se hace un modelo para cada tabla.

Después de hacer el modelo en el archivo models.py, ejecutar python3 manage.py makemigrations

Para crear relación entre tablas, dentro del modelo:

nombre = models.ForeignKey(nombre_tabla , on_delete = models.CASCADE , verbose_name = 'Author')

Eliminar en cascada --> Si se tiene una relación de un objeto a otro, si se intenta eliminar marcará error de integridad por la relación entre registros, si se elimina un padre, irá hacia abajo y eliminará todos los hijos del mismo registro.

La tabla a la que se hace referencia debe estar definida arriba de la tabla donde se relacionan o no encontrará el modelo.

Cuando se hace la migración después de hacer la relación entre tablas en una tabla que ya existe pregunta si se quiere agregar un valor default a los registros que ya están creados o si se quiere detener el proceso para agregar manualmente un valor  default.

En donde se crea la relación agregar null = True después de CASCADE

nombre = models.ForeignKey(nombre_tabla , on_delete = models.CASCADE , null = True ,verbose_name = 'Author')

53:04

Serializador --> ayuda a convertir los modelos en objetos que se pueden devolver a través del response de los views, el response devuelve la información a la parte del front que está haciendo una petición en algún endpoint o en una URL.

Suponiendo que solo queremos devolver ciertos parámetros en serializers, cambiar el campo fields = \'\_\_all\_\_'  por fields = ('nombre_campo1' , 'nombre_campo2' ,)

El serializador también ayuda a hacer validaciones dentro de las partes de actualización y creación de objetos, ayuda a no trabajar tan directamente sobre el modelo, sino que es más hacia la parte del serializador que valida la data que se va recibiendo desde la consulta, en caso de que no sea útil la data que están enviando o no sea la data que se tiene que recibir, que mande un error, eso se hace desde las views, se va al objeto del request.

En el put, post y patch hay algo llamado cuerpo de la petición, es donde viene toda la data, se guarda en request.data, se puede almacenar en una variable para manipularla de manera más sencilla, luego se serializa.

Hay varias maneras de manejar la validación, una de ellas es el método .is_valid(), toma el serializador y valida que los datos que se envían en ese punto sean correctos y estén acorde a lo que se pide en el modelo. Hay dos formas comúnes de utilizarla, con (raise_exception = true), al momento de validar, si encuentra un parámetro que no es útil o no es como debería, hace un return a la parte que está haciendo la petición indicando que no es lo que se pide, regresa un error 400 y un mensaje indicando el dato o problema exacto por el que se está regresando este error.

Otra forma es: 

``` python
if serializer.is_valid():
   
   return Response(serializer.errors , status  = status.HTTP_400_BAD_REQUEST)
```

Pero se tiene que identificar el error que devuelve el serializer para que sea correcto, no es del todo informativo para quien recibe esa respuesta, en front lo primero que se revisa es el status y éste puede no coincidir con el error que está recibiendo, es más recomendable el raise_exception para que devuelva el código de error que se necesita ver

Si no se especifica un campo en el serializer, devuelve un error al intentar guardarlo

Si se corrige un error tipográfico o algo similar en las vistas, se debe hacer un migrate.

En shortcuts hay algo que se llama get list or 404, si las listas están vacías, devuelve 404, puede usarse, por ejemplo, en donde se piden todos los autores. 