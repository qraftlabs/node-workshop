var fs = require("fs");
var stream = fs.createReadStream(__dirname + "/index.html");

stream.on("data", function(content){
  console.log(content.toString());
});