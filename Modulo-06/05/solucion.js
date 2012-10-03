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
    if(!request.session.user){
      request.session.user = {
        name: "jose",
        loggedSince: +new Date
      };
    }
    response.locals.user = request.session.user;
    next();
  });

  /**
   * Convert string date value to date object
   *
   * @api private
   */

  this.use(function(req, res, next){
    var user = res.locals.user;
    if (!user) return next();

    user.loggedSince = new Date(user.loggedSince);
    return next();
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
