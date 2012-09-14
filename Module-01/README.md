## Módulo 1 - Introducción

En este módulo aprenderemos conceptos básicos de node.js y el event loop. Los ejemplos se basan en lecto/escritura de archivos y servidores web.

## Ejercicio 01

En este ejercicio vamos a programar un servidor http, que responde todas las peticiones con un mensaje de hello world.

Pasos: 

- Establecer el status code correspondiente.
- Escribir el mensaje en el response.
- Llamar al método end del response.

## Ejercicio 02

Leyendo archivos asincronamente. Alguien cometió el error de escribir este código de manera sincrona y bloqueante. 
Intentemos convertirlo a non-blocking.

** Tip: "Sync" es feo **

## Ejercicio 03

En los ejercicios anteriores aprendimos como leer archivos de manera asincrona y como hacer un servidor http. En este ejercicio intentaremos combinar estos dos conceptos.
Deberas leer el archivo 'index.html' asincronamente en cada request, una vez leído escribir su contenido en el response y finalizar el response.

## Ejercicio 04

La idea de este ejercicio es hacer un servidor web, similar al ejercicio anterior, pero que sirva el contenido de la carpeta public de tal forma que podamos navegar a http://localhost:8080/index.html
y http://localhost:8080/about.html. Si navegamos a un archivo que no existe, debería devolver 404 con el mensaje "not-found".

** Tips: usar request.url, verificar el parametro 'error' de readFile, path.join puede ser una buena forma de combinar paths. **