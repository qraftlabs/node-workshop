var fs = require('fs');

console.log(fs.readFileSync(__dirname + '/index.html').toString());