var fs = require('fs');

fs.readFile(__dirname + '/index.html', function(error, content){
  console.log(content.toString());
});