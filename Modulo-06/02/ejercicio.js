var express = require("express"),
  movies = require("./moviedb"),
  app = express();

app.listen(8001);

// movies.filter(function(m){
//   return m.id === request.params.movieId
// })[0];

console.log("listening in http://localhost:8001");