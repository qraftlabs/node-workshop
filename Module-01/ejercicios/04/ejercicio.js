/*
 * En este ejercicio haremos un servidor de archivos. 
 * La idea es servir todos los archivos de la carpeta public,
 * de tal forma que podamos navegar a http://localhost:8080/index.html
 * y http://localhost:8080/about.html.
 * Si navegamos a un archivo que no existe, debería devolver 404.
 * Tips: request.url, chequear el parametro 'error' de readFile, 
 * path.join puede ser una buena forma de crear paths
 */

var fs = require('fs'),
  http = require('http'),
  path = require('path');

http.createServer(function(request, response){


}).listen(8080);