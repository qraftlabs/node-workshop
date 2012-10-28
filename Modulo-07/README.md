# Módulo 6 - socket.io

## Ejercicio 01

Esta versión de "The node.js movie db" tiene una característica que permite dejar un comentario en la página de la película. 

Nos gustaría que los comentarios aparecieran en tiempo real a medida que los usuarios los envían sin necesidad de refrescar la página. Utilizar socket.io en el servidor para **emit**r un evento llamado ```new-comment``` y subscribirse en el código client-side para agregar el nuevo comentario a la lista.

## Ejercicio 02

Siguiendo con el mismo caso de uso anterior, nos gustaría conocer la cantidad de usuarios actualmente conectados.

Emitir un evento llamado ```usercount``` con la cantidad de usuarios actualmente conectados cada vez que un socket se conecte y desconecte.

Tip: utilizar ```io.sockets.clients().length``` para la cantidad de clientes conectados.

## Ejercicio 03

Lo que hicimos hasta ahora tiene un pequeño problema. Cuando escribimos un comentario en una página de una película A, aparece el comentario en tiempo real en todas las páginas de todas las películas. Prueba comprobar este comportamiento.

Para solucionar este problema utilizaremos el concepto de 'rooms' de socket.io. Para ello debemos:

1-  Filtrar los clientes a los que enviamos el mensaje ```new-comment``` en la ruta POST /movie/id/comments por el nombre de película utilizando la función ```.in()```.
2-  El código client-side emite un evento ```join room``` cada vez que se accede a la página de la película. Escuchar este evento en el server y hacer ```socket.join``` para conectar el socket a un room.
3-	Al calcular la cantidad de clientes filtrar por room, esto es ```io.sockets.clients(room).length```
