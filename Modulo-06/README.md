# Módulo 6 - Express.js

## Ejercicio 01

Agregar una ruta a la aplicación que devuelva el archivo ```index.html```.

## Ejercicio 02

Agregar una ruta, de manera tal que al hacer un request a esta dirección ```/movies/<movieId>``` nos muestre la sinopsis de la película con dicho id. Si no existe ninguna película con dicho id, devolver 404.

Tips: leer el [api de response de express](http://expressjs.com/api.html) 

## Ejercicio 03

En este ejercicio hay dos rutas, la raíz ```/``` debe mostrar una lista de todas las películas disponibles en el catálogo. La segunda ruta es ```/movies/<código>``` y debería mostrar los detalles de las películas.

En este ejercicio las views ya han sido creadas, analizarlas y completar el código que falta para que esta aplicación funcione correctamente.

## Ejercicio 04

Agregar tres middleware de express:

1.  Deberá mostrar un mensaje por la consola ```request <FECHA Y HORA>: <METODO> <URL>```
2.  Deberá ralentizar el request por 2 segundos. 
3.  Deberá poner un objeto usuario para que las dos vistas puedan mostrar los datos del usuario logueado.

Tips: [response.locals](http://expressjs.com/api.html#res.locals), [How to write connect middleware](http://www.hacksparrow.com/how-to-write-midddleware-for-connect-express-js.html)

## Ejercicio 05

Esta aplicación muestra en todas sus views el nombre del usuario logueado y la hora a la que se logueo. El problema que tiene es que la hora desde que se logueo cambia con cada refresh.

Modificar el middleware para que el objeto usuario, con nombre y fecha de logueo se cree solo en el primer request y se guarde en la session del usuario.