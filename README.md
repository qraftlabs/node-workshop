## Introducción

Este es el repositorio del [Buenos Aires node.js workshop](http://workshopba.jit.su).

Este repositorio contiene ejemplos y explicaciones para cada uno de los 9 módulos del workshop.

## Herramientas necesarias para este workshop

1. node.js http://nodejs.org/download/ versión 0.8.X, recomendamos última versión estable 
    -  windows: utilizar distribución binaria 
    -  osx: utilizar distribución binaria o nave 
    -  [linux via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) 
    -  linux via nave  


2. un editor de texto para programadores. Recomendamos: 
    -  Sublime Text 2 http://www.sublimetext.com/2 
    -  Textmate (solo OSx) http://macromates.com/ 
    -  E-TextEditor (solo Windows) http://www.e-texteditor.com/ 


3. Git 
    -  windows y osx: http://git-scm.com/downloads 
    -  linux instalar con apt-get, yum o el package manager que utilice la distribución.


4. instalar los siguientes paquetes con npm globalmente:

    npm install mocha node-inspector -g

Instalación de node con nave

```
$ git clone https://github.com/isaacs/nave.git ~/nave 
$ ~/nave/nave.sh install 0.8.5 
$ ~/nave/nave.sh usemain 0.8.5 
```
## Como ejecutar los ejercicios

Clonar este repositorio con git clone y luego ejecutar ```npm install``` en la carpeta clonada. 

Los ejercicios se pueden ejecutar con node:

```
node Modulo-01/01/ejercicio.js
```

o utilizando run.js: 

```
node run.js 01 02
```

ejecuta el ejercicio 2 del módulo 1. También se puede ejecutar el ejercicio ya resuelto de la siguiente manera

```
node run.js 01 02 --solved
```


## Archivos md

Los archivos markdown se pueden leer en cualquier editor o desde el sitio web de este repositorio en github.

## Modulos


### Module 1 Introducción 

Introducción a node.js, non-blocking IO y el event loop. [ppt](https://docs.google.com/presentation/d/1bogZqj7C7NDT-H7GJBZV9Qfg2PcLmrzIaRvdqUtt360/edit)


### Module 2 Events

Entender la naturaleza de los eventos en node, crear, escuchar y emitir. [ppt](https://docs.google.com/presentation/d/1IlQnTMkrn2hod9UmNLyA6DRrwIhIOLz4l6rpsDzKqGw/edit)


### Module 3 Streams

Entender los streams en node.js como parte integral y lo que hace real-time posible. [ppt](https://docs.google.com/presentation/d/1e2j4OcaKGuukFuIq7AQOLVBUS_B2inxvTW6BnCuBsyM/edit)

### Module 4 Modules

Compartir código y reusar código de otros. [ppt](https://docs.google.com/presentation/d/1zaPEAhF5uXlEnkpGjTya7c_HVrnpuJqOZblYJO4AuA8/edit)


### Module 5 Debugging & Testing

Depurar y testear código javascript en node.js. [ppt](https://docs.google.com/presentation/d/19zFZzYRX4Kttz6CS6wKzF9hCiNT4zEUIq9Q9gV-unCo/edit)

### Module 6 Express

Usando el framework express.js para construir aplicaciones web. [ppt](https://docs.google.com/presentation/d/167HCSlpudqFKUn5CjPfp6oPBqz5EEfEAi2nXDOqp8Og/edit)

### Module 7 Socket.io

Construir aplicaciones realtime con socket.io. [ppt](https://docs.google.com/presentation/d/1HY53l4jnCAIBIXkBRIVnQP3XCGonYiEo3G1BmfdpT4c/edit)

### Module 8 Persistence

Usando mongodb como persistencia de documentos. [ppt](https://docs.google.com/presentation/d/1SGQGg7P9gfDzbs_nqLDSqczu6DsNUo0pMgDVUDGqQmI/edit)


### Module 9 Deployment

Como deployar aplicaciones node.js a la nube. [ppt](https://docs.google.com/presentation/d/1AhQ-GRpye7ray17wxvSAJPFycIi4R7Q3UFWOby5pqtg/edit)