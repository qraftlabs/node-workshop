var http = require('http'),
  myModule = require("./myModule");

http.createServer(function(request, response) {
  myModule(request, response);
}).listen(8000, function(){
  console.log("server is in " + "http://localhost:8000");
});