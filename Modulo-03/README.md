# Módulo 3 - Streams

En este módulo aprenderemos a utilizar [streams](http://nodejs.org/api/stream.html) en node.js.

## Ejercicio 01

En este ejercicio leeremos un archivo utilizando un ReadStream. Para ellos utilizaremos [fs.createReadStream](http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) y luego agregamos un callback al evento data de dicho stream que muestre el resultado por la consola.

## Ejercicio 02

En este ejercicio utilizaremos el método pipe de los streams para conectar un stream de lectura (fs.createReadStream) a la respuesta de un http server (response).

## Ejercicio 03

En este ejercicio aprenderemos con un sencillo ejemplo como resolver la "contrapresión" (backpressure) de los streams. En el código se pueden ver dos stream 

*  CountStream: es un stream de lectura, que emite un número cada un segundo.
*  LogStream: es un stream que escribe los datos en process.stdout.

La consigna es modificar solamente LogStream de manera tal, que solo pueda imprimir cada 3 segundos. 

Tip: verificar que hay que retornar en el metodo [write](http://nodejs.org/api/stream.html#stream_stream_write_string_encoding_fd), y el evento [drain](http://nodejs.org/api/stream.html#stream_event_drain).  
