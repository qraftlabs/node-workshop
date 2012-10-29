var express = require('express'),
  app     = express(), 
  server  = require('http').createServer(app);

var movies = require("./lib/movies");

app.configure(function(){
  this.set('view engine', 'ejs');
  this.set('views', __dirname + '/views');
  this.use(express.bodyParser());
});

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

app.get('/new', function (request, response) {
  response.render('movie_new');
});

app.post('/movies', function (request, response) {
  movies.create(request.body, function (err, result) {
    if(err){
      return response.send(500, err);
    }
    response.redirect('/movies/' + result._id.toString());
  });
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