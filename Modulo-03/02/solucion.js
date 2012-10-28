var fs = require("fs");
var http = require("http");

http.createServer(function (request, response) {
  fs.createReadStream(__dirname + "/index.html")
    .pipe(response);
}).listen(8080, function(){
  console.log("listening in http://localhost:8080");
});