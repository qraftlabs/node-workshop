var express = require("express"),
  movies = require("./moviedb"),
  app = express();

app.configure(function(){
  this.set("view engine", "ejs");
  this.set("views", __dirname + "/views");
  
  app.use(express.cookieParser());
  app.use(express.session({
    secret: "the secret!"
  }));

  this.use(function(request, response, next){
    if(!request.session.user) {
      request.session.user = {
        name: "jose",
        loggedSince: new Date
      };
    } else {
      request.session.user.loggedSince = new Date(request.session.user.loggedSince);
    }

    response.locals.user = request.session.user;
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
