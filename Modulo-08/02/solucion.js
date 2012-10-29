var express = require('express'),
  app     = express(), 
  server  = require('http').createServer(app);

var movies = require("./lib/movies.solucion");

app.configure(function(){
  this.set('view engine', 'ejs');
  this.set('views', __dirname + '/views');
  this.use(express.bodyParser());
});

//middleware para mapear todos los parametros movieId
app.param('movieId', function(request, response, next, movieId){
  movies.getById(request.params.movieId, function (err, movie) {
    if(err){
      return response.send(500, err);
    }
    if(movie){
      request.movie = movie;
      next();
    }else{
      response.send(404);
    }
  });
});

app.get('/movies/:movieId', function (request, response) {
  response.render('movie', request.movie);
});

app.get('/', function (request, response){
  movies.getAll(function (err, movies) {
    if(err){
      return response.send(500, err);
    }
    response.render('index', { movies: movies });
  });
});

app.post('/movies/:movieId/comments', function (request, response) {
  request.movie.comments.push(request.body);
  response.redirect("/movies/" + request.movie.id + "/");
});

server.listen(8001, function(){
  console.log('listening in http://localhost:8001');
});