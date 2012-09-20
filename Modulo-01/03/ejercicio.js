var fs = require('fs'),
  http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  
  response.end();
}).listen(8001, function(){
  console.log("server is in " + "http://localhost:8001");
});