/*
 * Alguien cometió el error de escribir este código de manera bloqueante. 
 * Intentemos convertirlo a non-blocking.
 * Tip: "Sync" es feo
 */

var fs = require('fs');

fs.readFile(__dirname + '/index.html', function(error, content){
  console.log(content.toString());
});