var express = require("express"),
  app = express();


app.get("/", function(request, response){
  response.sendfile(__dirname + "/index.html");
});

app.listen(8001);

console.log("listening in http://localhost:8001");