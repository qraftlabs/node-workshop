# Módulo 5 - Debugging y Testing

En este módulo aprenderemos algunos conceptos básicos de debugging y unit testing.

## Ejercicio 01

En este ejercicio vamos a depurar ```ejercicio.js``` de la siguiente manera:

```
node debug ejercicio.js
```
la idea es agregar una inspección a ```x``` y seguir la ejecución del procedimiento paso a paso.

Tips: utilizar watch("x"), s y n. [más información](http://nodejs.org/api/debugger.html)

## Ejercicio 02

El ejercicio 02 tiene un problema. MyModule.js posee un contador que debería incrementar de a uno cada vez que se refresca la página en el navegador. Desafortunadamente incrementa de a 2.

Utilizando ```node-inspector``` depurar el código para encontrar la causa del problema y arreglar el código. 

Tip: el objetivo de este ejercicio es utilizar el debugger más alla de lo trivial que parezca el problema.

## Ejercicio 03

El objetivo de este ejercicio es arreglar los 3 tests que fallan del ejemplo de fizzbuzz. Para ejecutar los tests, accede a la carpeta Modulo-05/03 y ejecuta el comando: ```npm test```.

# Ejercicio 04

Verificar por que falla el test asíncrono de la carpeta 04.
