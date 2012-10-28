# Módulo 6 - socket.io

## Ejercicio 01

Esta versión de "The node.js movie db" tiene una característica que permite dejar un comentario en la página de la película.

Nos gustaría que los comentarios aparecieran en tiempo real a medida que los usuarios los envían sin necesidad de refrescar la página. Utiliza socket.io en el servidor para **emit**r un evento llamado ```new-comment-<movieId>``` y subscribe en el código client side para agregar el nuevo comentario a la lista.

## Ejercicio 02

Siguiendo con el mismo caso de uso anterior, nos gustaría conocer la cantidad de usuarios actualmente conectados.

Emitir un evento llamado ```usercount``` con la cantidad de usuarios actualmente conectados cada vez que un socket se conecte y desconecte.