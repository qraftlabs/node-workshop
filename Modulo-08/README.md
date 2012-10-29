# Módulo 8 - persistencia

## Ejercicio 01

Implementar en el archivo ```lib/movies.js``` la funcionalidad para obtener la lista de películas ordenadas por nombre. 

Tip: [db.collection](http://mongodb.github.com/node-mongodb-native/api-generated/db.html#collection), [collection.find](http://mongodb.github.com/node-mongodb-native/api-generated/collection.html#find), [cursor.toArray](http://mongodb.github.com/node-mongodb-native/api-generated/cursor.html#toarray)

## Ejercicio 02

Imeplementar en el archivo ```lib/movies.js``` el método ```getById```.

Tip: [collection.findOne](http://mongodb.github.com/node-mongodb-native/api-generated/collection.html#findOne), utilizar la clase ObjectID para el query.

## Ejercicio 03

Imeplementar en el archivo ```lib/movies.js``` el método ```create``` para guardar una película nueva

Tip: utilizar [collection.insert](http://mongodb.github.com/node-mongodb-native/api-generated/collection.html#insert), el callback devuelve un array