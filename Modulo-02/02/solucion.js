var EventEmitter = require('events').EventEmitter;
var timer = new EventEmitter(), count = 0;

function callMeOnce(){
  console.log(['\x1B[34m', 
                "deberías ver este mensaje solo una vez y al principio!", 
                '\x1B[39m'].join(''));
}

function countAndShow(){
  console.log(count++);
}


timer.once('elapsed', callMeOnce);

timer.on('elapsed', countAndShow);


setInterval(function(){
  timer.emit("elapsed");
}, 1000);