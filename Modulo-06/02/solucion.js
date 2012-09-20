var express = require("express"),
  movies = require("./moviedb"),
  app = express();

app.get("/movies/:movieId", function(request, response){
  
  var movie = movies.filter(function(m){
    return m.id === request.params.movieId;
  })[0];

  if(!movie){
    response.send(404);
  }else{
    response.end(movie.synopsis);
  }

});

app.listen(8001);

console.log("listening in http://localhost:8001");