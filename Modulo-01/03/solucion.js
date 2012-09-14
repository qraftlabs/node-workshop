var fs = require('fs'),
  http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  
  fs.readFile(__dirname + '/index.html', function(error, content){
    response.write(content);
    response.end();
  });

}).listen(8080, function(){
  console.log("server is in " + "http://localhost:8080");
});