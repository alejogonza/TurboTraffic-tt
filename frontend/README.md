# TurboTraffic Frontend

## Descripción del proyecto :page_facing_up:
Frontend de TurboTraffic que consta de una aplicación en react nativo para ver un catálogo de productos aplicado las mejores prácticas de programación y cumpliendo con los requerimientos de la prueba.

<br/>

## Requerimientos e instalación :memo:
- Docker instalado (Recomendado).
- Node.js instalado (Opcional si tienes docker).


<br/>

## Iniciar proyecto con Docker :whale:
Ejecutar el archivo **run.sh**:
```
./run.sh
```
En cuando termine la ejecución del comando puedes abrir en cualquier navegador **http://localhost:3000**

<br/>

## Iniciar proyecto sin docker :construction_worker:
Los requerimientos mínimos para este método de ejecución son:
- Node 16

```
npm install && npm start
```
Luego de inicializar el frontend puedes abrir en cualquier navegador **http://localhost:3000**

<br/>

## Acceder a zona admin :crown:
Debes registrarte con el nombre **fernando**

<br/>

## Comentarios sobre el desarrollo :thought_balloon:
Durante el desarrollo del proyecto me enfoqué en un tema que involucre los requerimientos de la prueba y decidí crear Trubotraffic Shoes con una temática punk y nuclear para dar mejor estética, me enfoque en seguir los principios KISS, DRY y YAGNI así que no use ninguna librería extra que no fuera sumamente necesaria para el desarrollo de la prueba, implemente una validación de rutas algo rudimentaria que verifica que el usuario deba estar registrado para ver los productos y que deba tener el nombre fernando para ver el panel de admin, hice componentes personalizados como los botones y los inputs para reutilizarlos rápidamente en el proyecto, separe las peticiones del backend en un servicio aparte para facilitar las consultas en las páginas y mantener un orden y estructura limpia y use el context API de react para almacenar el nombre de usuario al registrarse para la autenticación de rutas. La implementación de docker en el proyecto se hizo para facilitar la revisión de la prueba.

<br/>

## Creado con :hammer:
- React (18.2.0)
- Axios (1.2.1)

<br/>

## Autor :copyright:
Alejandro Gonzalez Serna - alejo.1996.2001@gmail.com
