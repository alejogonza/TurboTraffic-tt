# TurboTraffic Backend

## Descripción del proyecto :page_facing_up:
Backend de TurboTraffic que consta de una API con node, express y postgreSQL aplicado las mejores prácticas de programación y cumpliendo con los requerimientos de la prueba.

<br/>

## Requerimientos e instalación :memo:
- Docker instalado (Recomendado).
- Node.js instalado (Opcional si tienes docker).
- PostgreSQL instalado (Opcional si tienes docker).

<br/>

## Iniciar proyecto con Docker :whale:
Ejecutar el archivo **run.sh**:
```
./run.sh
```
En cuando termine la ejecución del comando puedes abrir postman
y ver la documentación de la API

<br/>

## Iniciar proyecto sin docker :construction_worker:
Los requerimientos mínimos para este método de ejecución son:
- Node 16

```
npm install && npm start
```
En cuando termine la ejecución del comando puedes abrir postman
y ver la documentación de la API

<br/>

## Esquema de base de datos :bookmark_tabs:

<br/>

<p align="center">
  <img src="https://res.cloudinary.com/dlqmpatgu/image/upload/v1672380517/Captura_de_pantalla_2022-12-30_a_la_s_1.08.12_a.m._cdkfu4.png" />
</p>

<br/>


## Rutas :motorway:

<br/>

| **Metodo** | **Ruta** | **descripción** |
| ---------------- | ---------------- | --------------- |
| GET | api/v1/products | Obtiene todos los productos registrados **requiere headers** |
| GET | api/v1/products/get-product?id={id} | Obtiene un producto específico **requiere headers** |
| PATCH | api/v1/products/set-product | Crea una lista de productos dummy |
| GET | api/v1/products/admin | Obtiene todos los productos con los reviews **requiere headers admin**|
| POST | api/v1/user/create-user| Crea un usuario |
| PUT | api/v1/user/create-review/?id={id}&review={review} | Crea una review de un producto específico **requiere headers**|

<br/>

## Documentación API :man_astronaut:

[Postman web](https://documenter.getpostman.com/view/22798584/2s8Z6yXsiK)

<br/>

## Comentarios sobre el desarrollo :thought_balloon:

Durante el desarrollo del proyecto me costó un poco hacer la API con postgreSQL,  ya que estaba acostumbrado a usar mongo como base de datos, pero me lo tome como reto personal y todo salió bien, implemente un modelo vista-controlador para mantener el desarrollo escalable y que se facilite la creación de rutas por categoría, también me enfoque en seguir los principios KISS, DRY y YAGNI así que no use ninguna librería extra que no fuera sumamente necesaria para el desarrollo de la prueba, implemente una validación de rutas algo rudimentaria que verifica que el usuario deba estar registrado y existente en los headers para algunas rutas que considere necesario según los requerimientos de la prueba, para los modelos de las tablas hice una relación uno a muchos, ya que los reviews pueden crecer exponencialmente dependiendo de la popularidad del sitio es más práctico separar estos datos de la tabla de productos y hacer un join cuando se requiera la información. La implementación de docker en el proyecto se hizo para facilitar la revisión de la prueba.

<br/>

## Creado con :hammer:

- Node (16.16.0)
- PostgreSQL (sequelize) (15.1)
- Express (4.18.2)
- babel (7.20.5)

<br/>

## Autor :copyright:
Alejandro Gonzalez Serna - alejo.1996.2001@gmail.com
