var fizzBuzz = require("../ejercicio");

describe("fizzbuzz", function(){
  it("should return fizz when it is divisible by 3", function() {
    fizzBuzz(3).should.be.eql("fizz");
    fizzBuzz(9).should.be.eql("fizz");
  });

  it("should return buzz when it is divisible by 5", function() {
    fizzBuzz(5).should.be.eql("buzz");
  });

  it("should return fizzbuzz when it is divisible by 5 and 3", function() {
    fizzBuzz(15)
      .should.be.eql("fizzbuzz");
  });

  it("should return the number when it is not divisible by 5 y 3", function() {
    fizzBuzz(7)
      .should.be.eql(7);
  });
});