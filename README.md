# TurboTraffic - Prueba técnica

## Descripción del proyecto :page_facing_up:
Prueba técnica de TurboTraffic que consta de una aplicación para ver un catálogo de productos con el frontend separado del backend aplicado las mejores prácticas de programación.

<br/>

## Requerimientos e instalación :memo:
- Docker instalado (Recomendado).
- Node.js instalado (Opcional si tienes docker).
- PostgreSQL instalado (Opcional si tienes docker).

<br/>

## Iniciar proyecto con Docker :whale:
Ejecutar el archivo **run.sh** si tienes mac se abrirá automáticamente la web:
```
./run.sh
```
En caso de no tener mac cuando termine la ejecución del comando puedes abrir en cualquier navegador **http://localhost:3000**

<br/>

## Iniciar proyecto sin docker :construction_worker:
Los requerimientos mínimos para este método de ejecución son:
- Node 16
- postgreSQL

Importante seguir el orden de inicio de los proyectos **backend -> frontend**
```
cd backend
npm install && npm start
cd frontend
npm install && npm start
```
Luego de inicializar el frontend puedes abrir en cualquier navegador **http://localhost:3000**

<br/>

## Más detalles :heavy_plus_sign:
En el README.md de cada carpeta habrá notas e información diversa acerca del desarrollo de esta prueba.

<br/>

## Preguntas adicionales :speech_balloon:

<br/>

**1 - ¿Cómo cambiarias la base de datos si se quiere internacionalizar?**

<br/>

  - Una opción sería utilizar un esquema de traducción. Esto implicaría crear tablas adicionales para almacenar las traducciones de los datos en diferentes idiomas. Por ejemplo, si la base de datos original tiene una tabla de productos con campos como nombre y descripción, se podría crear una tabla de traducción de productos que tenga campos como id del producto, idioma y traducción del nombre y descripción. De esta manera, se podrían almacenar las traducciones de los datos en diferentes idiomas y mostrarlos al usuario según su preferencia.

<br/> 

**2 - ¿Si asumimos que la base de datos va a crecer y puede llegar a tener un millón de
productos, ¿qué arquitectura le darías y por qué?**

<br/>

  - Podría considerar utilizar una arquitectura de base de datos distribuida para poder escalar horizontalmente. Esto implicaría dividir la base de datos en múltiples máquinas o servidores para distribuir la carga de trabajo y mejorar el rendimiento. También podría considerar utilizar índices para mejorar la velocidad de búsqueda y utilizar un sistema de caché para almacenar temporalmente los datos más utilizados como redis y reducir la cantidad de consultas a la base de datos, también consideraría usar una NoSQL como mongoDB para aumentar aún más la afluencia y disponibilidad rápida de los datos por consulta.
  
<br/>


**3 - Si además del número de records crece tremendamente (> 10 millones) y el número
de consultas simultáneas asciende a más de 10,000/segundo que otros ajustes
realizarías a la solución inicial?**

Cabe aclarar que estas opciones deben adaptarse depende del contexto del proyecto, negocio, clientes y empresa, pero en términos generales aplicaría lo siguiente:
<br/>

  - Usaría un servidor de base de datos de mayor rendimiento: un servidor de base de datos más potente podría manejar mejor el aumento de la carga de trabajo y ofrecer un rendimiento mejorado.
  - Implementaría un sistema de caché como Redis almacenar los resultados de consultas comunes en caché puede reducir la carga en el servidor de base de datos y mejorar el rendimiento de la aplicación.
  - Usaría un servidor de mayor rendimiento: ya que podría manejar mejor el aumento del tráfico y mejorar el rendimiento de la aplicación.
  - Revisaría las consultas a la base de datos e intentaría optimizarlas asegurándome sean lo más eficientes posibles, esto podría ayudar a mejorar el rendimiento de la aplicación.
  - Usaría un loadbalancer distribuyendo la carga entre varios servidores, puesto que se puede mejorar el rendimiento de la aplicación y garantizar la disponibilidad en caso de fallo de uno de los servidores.

<br/>

**4 - ¿Cómo implementarías una búsqueda de productos para catálogos de muchos (>
10 millión) productos?**

También hay que considerar muchos factores propios de los intereses del negocio y la afluencia de consulta, Hora media de mayor tráfico, entre otros factores, pero en términos generales aplicaría lo siguiente:
<br/>

  - Utilizaría un índice full-text en la base de datos teniendo en cuenta que la base de datos sea PostgreSQL, crearía un índice full-text en la tabla de productos y luego la utilizaría para realizar búsquedas en el índice.

 - Consideraría usar un servicio de búsqueda externo, como Elasticsearch, para indexar y realizar búsquedas en los datos de los productos. Esto podría ser especialmente útil si se necesita realizar búsquedas avanzadas y se cuenta con poco tiempo y equipo.

 - Usaría ambas opciones dependiendo de las necesidades y opciones del negocio, partiendo 50/50 Full-text para búsquedas rápidas y Elasticsearch para búsquedas complejas.

 - Revisaría el esquema de datos para ver si se puede optimizar las búsquedas para facilitarlas en pro de la facilidad de hacer la consulta como tal.

<br/>

**5 - ¿Cómo añadirías la implementación de un carrito de compras?**

También esto dependería del negocio para aplicar reglas, entre otras cosas, por lo general aplicaría lo siguiente:
<br/>

  - Crearía una tabla con los datos base como Nombre, Descripción, Productos, etc..
  - Crearía una ruta POST en el backend que reciba el ID, las variantes y la cantidad para hacer un insert a la tabla.
  - Crearía una ruta GET en el backend que reciba el ID por parámetro del carro y devolver los productos añadidos.
  - Crearía una ruta PUT en el backend que reciba el ID, las variantes y la cantidad a editar en el carro y hacer un update a la tabla.
  - Crearía una ruta DELETE en el backend que reciba el ID del carro para eliminar productos o el carro como tal.

<br/>

## Creado con :hammer:
- React (18.2.0)
- Node (16.16.0)
- PostgreSQL (sequelize) (15.1)
- Express (4.18.2)
- babel (7.20.5)

## Autor :copyright:
Alejandro Gonzalez Serna - alejo.1996.2001@gmail.com
