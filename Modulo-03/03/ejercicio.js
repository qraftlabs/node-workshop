var Stream = require("stream").Stream;

function CountStream(){
  Stream.call(this);
  var count = 0;
  
  this.resume = function(){
    this._interval = setInterval(function(){
      this.emit('data', (count++).toString() + "\n");
    }.bind(this), 1000);
  };

  this.pause = function(){
    clearInterval(this._interval);
  };

  this.pipe = function(otherStream){
    otherStream.on("drain", this.resume.bind(this));
    Stream.prototype.pipe.apply(this, arguments);
  };
  this.resume();
}
CountStream.prototype = Object.create(Stream.prototype);

function LogStream(){
  Stream.call(this);
  this.writable = true;

  this.write = function(data){
    process.stdout.write(data);
  };
}

LogStream.prototype = Object.create(Stream.prototype);

new CountStream().pipe(new LogStream());