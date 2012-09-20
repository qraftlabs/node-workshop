var express = require("express"),
  movies = require("./moviedb"),
  app = express();

app.configure(function(){
  this.set("view engine", "jade");
  this.set("views", __dirname + "/views");
  this.use(express.bodyParser());
  this.use(express.static(__dirname + "/public"));
});

app.locals.layout = "layout";

app.get("/movies/:movieId", function( request, response ){
  console.log(movies);
  var movie = movies.filter(function(m){
    return m.id.toString() === request.params.movieId;
  })[0];
  
  if(!movie) {
    response.send(404);
  }else{
    response.render("movie", movie);
  }
});

app.get("/", function( request, response ){
  response.render("index", { movies: movies });
});

app.post("/movies", function( request, response ){
  var movie = request.body;
  movie.id = movies.length + 1;
  movies.push(movie);
  response.send(201, movie);
});

app.listen(8001);

console.log("listening in http://localhost:8001");