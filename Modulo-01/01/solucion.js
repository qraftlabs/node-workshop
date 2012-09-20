var http = require('http');

http.createServer(function(request, response) {

  response.writeHead(200);
  response.write('hello world');
  response.end();

}).listen(8001, function(){
  console.log("server is in " + "http://localhost:8001");
});