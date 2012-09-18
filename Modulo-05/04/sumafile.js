var fs = require("fs");
module.exports = function( file, callback ) {
  fs.readFile( file, function(err, data ) {
    if(err) return callback(err);

    var result = data.toString().split("\n")
      .reduce(function ( prev, current ) {
        return prev + parseInt(current, 10);
      }, 0);

    // callback(null, result);
  });

};