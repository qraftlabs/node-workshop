var express = require("express"),
  movies = require("./moviedb"),
  app = express();

app.configure(function(){
  this.set("view engine", "ejs");
  this.set("views", __dirname + "/views");
  
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'the secret!'
  }));

  this.use(function(request, response, next){
    var user = {
      name: "jose",
      loggedSince: new Date().toLocaleTimeString()
    };
    response.locals.user =  user;
    next();
  });

});

app.get("/movies/:movieId", function( request, response ){
  var movie = movies.filter(function(m){
    return m.id === request.params.movieId;
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

app.listen(8001);

console.log("listening in http://localhost:8001");