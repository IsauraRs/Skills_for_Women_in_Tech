# ¿Qué es Git?

Git es un sistema de control de versiones.

Un sistema de control de versiones es un sistema que permite registrar los cambios en los archivos y directorios y llevar un control.

Es un sistema que registra los cambios de uno o varios archivos a través del tiempo, permitiendo recuperar versiones específicas de estos más adelante.

Flujo habitual de trabajo:

   * Crear archivo

   * Editar el archivo

   * Guardarlo

   * Volver a editar

   * Volver a guardar 'n' número de veces 

Git es un sistema de control de versiones distribuido, diseñado por Linus Torvalds (creador de Linux), surge en 2005, a partir de la necesidad de reemplazar el sistema de control de versiones que se utilizaba en ese entonces (Perforce) para el proyecto del kernel de Linux.

## Características de Git

Es distribuido, cada persona que tiene una copia del repositorio tiene todo el historial, lo que permite tener una mayor flexibilidad, es más rápido y si algo sucede en el servidor remoto, mientras se tenga una copia local del repositorio, el historial estará en el equipo y no se pierde, se tendrá acceso siempre.

Git es seguro, utiliza hashes SHA1 para garantizar que todos tienen el mismo archivo.

Además, al utilizar el protocolo SSH asegura que los datos viajan seguros por la red. Es utilizado para conectar con repositorios remotos, asegurándose de que los datos viajan seguros y cifrados .

Cuando se genera una versión (se hace un commit), git la firma mediante un hash y se asegura que si se hace un cambio fuera de git, el hash no va a coincidir y nos dará una advertencia de que algo cambió.

Sin dependencia, al ser un sistema de control de versiones distribuido, permite trabajar sin una conexión directa al servidor. Se pueden hacer commits y revisar el historial sin necesidad de una conexión a internet ni a un servidor.

Git es rápido (consecuencia de que no tenga dependencia), la mayoría de las operaciones en git son locales, esto disminuye bastante el tiempo de respuesta, por ejemplo, al buscar en el historial.

Cada repositorio de un usuario es un clon completo, suponiendo que el servidor central falla, no se pierde el historial de versiones.

Si algo le sucede con el equipo, siempre y cuando se hayan subido cambios al repositorio, el código estará seguro.

Si se decide designar un servidor central, se tienen opciones como:

* github
* GitLab
* Bitbucket

![opciones](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Git_y_Github/images/Opciones.png)

En ellos se puede crear una cuenta de manera gratuita.

Ofrecen diferentes opciones de almacenamiento, ofrecen repositorios privados, opciones de pago para mayor almacenamiento, etc. 

## GitFlow

Flujo de trabajo de Git, define un diseño de ramas específico que también hace uso de un feature flow (flujo de características o funcionalidades).

Fue publicado por Vincent Driessen, diseñó un flujo de trabajo que utiliza un diseño de ramas específicas, el cual asigna una función específica a cada una de ellas, además de usar las ramas de característica o funcionalidad como el feature flow.

![GitFlow](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Git_y_Github/images/Gitflow.png)

Ramas principales:

   * Master

   * Develop nace de master

   * Hotfix de correcciones

   * Release donde se programa un entregable del programa

![Ramas](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Git_y_Github/images/Ramas.png)


Sobre la rama develop se usa el Feature flow, la rama principal (Master) no debe tener código no probado, se busca que tenga una versión estable, los commits se hacen sobre una rama de una corrección, suponiendo que se hizo un release que hace referencia a una versión específica, donde hay un error, al estar liberada la versión del sistema, se hace a partir del commit de esa versión se hace una rama Hotfix que lleva el nombre al que hace alusión de la funcionalidad (Hotfix/nombre_funcionalidad), nace de la rama master o main y una vez que se corrige, se integra nuevamente a la rama principal haciendo un nuevo release y se integra a la rama develop para que esté corregido en futuras versiones.

En la rama develop tampoco se hacen commits directamente, sino que se crea una rama de Feature o funcionalidad que nace de la rama principal develop, se prueban las funcionalidades y se integran a Develop, una vez integradas a develop y se define un release de la aplicación, a partir del commit en el que se integraron los Features a la rama develop, se saca una rama Release y el nombre de las funcionalidades que indiquen de qué es el release (Release/nombre_funcionalidad), en esa rama se congelan las nuevas características. Se puede seguir trabajando en esa rama pero solo en correcciones, está a la misma altura del Hotfix, una vez que se corrigen y se prueban y la aplicación está lista para ser liberada en producción, se integra de la rama Release a la rama principal Main o Master, los commits de correcciones se integran también a la rama Develop para tener las correcciones en la rama de desarrollo.

También se puede utilizar el flujo de trabajo forkflow, que es crear una réplica del repositorio completo, donde el usuario que quiere colaborar con el proyecto crea una copia personal del proyecto en su usuario, donde tiene permisos de escritura sobre ese repositorio, pero no afecta al repositorio original, si se quiere integrar los cambios al repositorio original, mediante el pull request se pueden comparar dos repositorios diferentes y al ser una copia, van a coincidir y se puede integrar los cambios de un repositorio a otro.

## Workflow basado en ramas (Feature Branch)

Define más de una rama, no se trabaja sobre la rama Master, los primeros commits sí son directos en esa rama para definir la estructura o base del proyecto, pero una vez definidas las características o funcionalidades del sistema, se crea una rama o "n" número de ramas para cada característica del sistema, nacen de la rama principal. No hacer commits en la rama principal da la ventaja de que no se tiene código que no se ha probado previamente (en teoría). Ya que está completa la funcionalidad se integra a la rama master, variaas personas o equipos pueden trabajar en diferentes funcionalidades sin afectar la rama principal y siempre se hace la integración hasta que esté terminada la funcionalidad.

![WorkflowRamas](https://github.com/IsauraRs/Skills_for_Women_in_Tech/blob/main/Git_y_Github/images/FeatureBranch.png)

Feature Workflow 

En este flujo se trabaja sobre una rama central(main o master) y hace uso de otras ramas con un enfoque por característica o funcionalidad permitiendo que la rama principal no tenga código no funcional.

Este flujo da la ventaja para trabajar en entornos de integración continua, además de promover una revisión de código a través de los pull request.

Una de las características principales de Git es su flexibilidad, es tan flexible que se puede adaptar a la forma de trabajo. 

Existen algunos flujos de trabajo que se pueden tomar como ejemplo:

## Workflow centralizado

Define un servidor, un repositorio remoto central como la entrada principal de trabajo, generalmente define una sola rama principal y no hace uso de otras ramas, se trabaja sobre la rama main / master, en éste flujo se trata de mantener un historial lineal usando Rebase (forma de administración).


Este flujo de trabajo es usual cuando se comienza a trabajar con Git y venimos de otros sistemas de control de versiones como Subversion.