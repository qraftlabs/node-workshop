var fs = require('fs'),
  http = require('http'),
  path = require('path');

http.createServer(function(request, response){
  
  fs.readFile(path.join(__dirname, 'public', request.url), function(error, content){
    if(error && error.code === 'ENOENT'){
      response.writeHead(404);
      response.write('not found');
    }else{
      response.writeHead(200);
      response.write(content);
    }

    response.end();

  });

}).listen(8080, function(){
  console.log("server is in " + "http://localhost:8080");
});