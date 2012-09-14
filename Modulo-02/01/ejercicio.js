var EventEmitter = require('events').EventEmitter;

var timer = new EventEmitter();

timer.on("elapsed", function () {
  console.log("tick!");
});

//emitir aquí