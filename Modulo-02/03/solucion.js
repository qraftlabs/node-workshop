var EventEmitter = require('events').EventEmitter;

//definimos la clase Timer
function Timer(interval){
  EventEmitter.call(this);
  var intervalId;

  this.start = function(){
    intervalId = setInterval(function(){
      this.emit("elapsed");
    }.bind(this), interval);
  };

  this.stop = function() {
    clearInterval(intervalId);
    intervalId = 0;
  };
}

//Timer hereda de EventEmitter
Timer.prototype = Object.create(EventEmitter.prototype);


//Ejemplo de uso
var serio  = new Timer(1000),
  chistoso = new Timer(400), 
  count = 0;

serio.on('elapsed', function(){
  console.log(count++);
  if(count === 10){
    serio.stop();
  }
});

chistoso.on('elapsed', function(){
  console.log(['\x1B[35m', 
                "jaja", 
                '\x1B[39m'].join(''));
});

serio.start();
chistoso.start();
// fin de ejemplo de uso