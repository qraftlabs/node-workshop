var fs = require('fs'),
  http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  
  response.end();
}).listen(8080);