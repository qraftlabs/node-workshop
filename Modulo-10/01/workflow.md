
# Workflow

Descrpcion general de la aplicación

![Todo -
Limtado}(http://f.cl.ly/items/1N1V132A1E261h2l2x26/bawk%20-%20todo%20-%2001.png)
![Todo - Agregar](http://f.cl.ly/items/0s2F0P132U1D1q2H2H37/baws%20-%20todo%20-%2002.png)


## Express - nuestro framework de trabajo

### Instalación

  1. `npm install -g express`

### Implementación

  1. Creamos una express applicacion: `express`

  Explicación

  * Archivos generados: app.js, routes/, views/, public/
  * Conexión entre controlador y vista

### Ejecución

  1. run `PORT=8080 node app.js`


## Nodemon - reload hanlder

### Instalacion

  1. Ejecutamos: `npm install -g nodemon`

### Run

  1. Ejecutamos: `PORT=8080 nodemon app.js` 


## Jade - engine de html

### Visualización de layout.jade


## Stylus - engine de css

### Instalacion

  1. Agregamos dependencia de Stylus en package.json
  2. Actualizamos dependencias: `npm install`

### Inclusión

  1. Creamos modulo stylus compiler dentro de lib/.
  1. Agregamos stylus como middleware de express.


## Monk - base de datos

### Instalacion

  1. Agregamos dependencia de Monk en package.json
  2. Actualizamos dependencias: `npm install`

### Inclusión

  1. Creamos modulo db.js dentro de lib/.
  2. Definimos indices de la dB, etc.
  3. Incluimos el nuevo modulo dB cuando sea necesario: `require('./lib/db')


## Componentes

### Instalación

  1. Ejecutamos: `npm install -g component` 

### Componente principal

  1. Creamos lib/todo.
  2. Creamos componente genérico: `component create todo`.
  3. Generamos componente: `make`.
  2. Creamos enlace simbolico a public/javascripts.
  3. Agregamos al layout principal.
