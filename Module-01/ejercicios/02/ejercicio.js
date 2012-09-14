/*
 * Alguien cometió el error de escribir este código de manera bloqueante. 
 * Intentemos convertirlo a non-blocking.
 * Tip: "Sync" es feo
 */

var fs = require('fs');

console.log(fs.readFileSync(__dirname + '/index.html').toString());