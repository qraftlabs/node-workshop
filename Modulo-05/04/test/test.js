var sumfile = require("../sumfile");
var fs = require("fs");

describe("sum file", function(){
  
  before(function(){
    this.fixtureFile = __dirname + "/fixture-1.txt";
  });

  afterEach(function(done){
    //elimina el archivo
    fs.unlink(this.fixtureFile, done);
  });

  describe("when the file has numbers only", function(){

    before(function(done){
      var content = [1, 100, 99, -50].join("\n");
      fs.writeFile(this.fixtureFile, content, done);
    });

    it("should return the sum of all lines");
  });

  describe("when the file contains symbols", function(){

    before(function(done){
      var content = [1, 100, 99, -50, "+", "-", "*"].join("\n");
      fs.writeFile(this.fixtureFile, content, done);
    });

    it("should sum NaN as -1"); 
    //tip isNaN(...)

    it("should sum using a symbols map"); 
    //usar segundo parametro opcional para symbol map.
    //ej: {"+": 5, "-": -5, "*": 2}
  });

});