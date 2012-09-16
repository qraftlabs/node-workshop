## Introducción

Este es el repositorio del Workshop de Introducción A Aplicaciones Web RealTime con NODE.JS.

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

- Module 1 - Introducción: Introducción a node.js, non-blocking IO y el event loop.
- Module 2 - Events: Understand the nature of events in node listen, create and trigger
- Module 3 - Streams: Understand streams which are an integral part of node and what makes real-time possible
- Module 4 - Modules: How to share code and reuse other's code
- Module 5 - Debugging & Testing: How to debug and test your code
- Module 6 - Express: Use the express web framework to build MVC web applications
- Module 7 - Socket.io: Understand real time node.js by using socket.io
- Module 8 - Persistence: How to use mongodb to store data
- Module 9 - Deployment: How to deploy node.js applications on your servers and the cloud