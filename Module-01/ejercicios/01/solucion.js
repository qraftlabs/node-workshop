/*
 * Este es un hello world http server. 
 * Primero hay que establecer el status code correspondiente.
 * Luego, escribir el mensaje en el response.
 * Para finalizar, llamar al método end del response.
 */

var http = require('http');

http.createServer(function(request, response) {

  response.writeHead(200);
  response.write('hello world');
  response.end();

}).listen(8080);