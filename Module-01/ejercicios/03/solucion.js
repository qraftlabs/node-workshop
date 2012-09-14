/*
 * Ahora que conocemos como leer archivos y escribir respuestas http
 * intentemos combinar los dos conceptos.
 * En este ejercicio deberas leer el archivo 'index.html' asincronamente en cada request,
 * una vez leído escribir su contenido en el response y finalizar el response.
 */

var fs = require('fs'),
  http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  
  fs.readFile(__dirname + '/index.html', function(error, content){
    response.write(content);
    response.end();
  });

}).listen(8080);