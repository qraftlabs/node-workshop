var express = require('express'),
    app     = express(), 
    server  = require('http').createServer(app);

var movies = require("./lib/movies");

app.configure(function(){
  this.set('view engine', 'ejs');
  this.set('views', __dirname + '/views');
  this.use(express.bodyParser());
});

app.get('/', function (request, response){
  movies.getAll(function (err, movies) {
    if(err){
      return response.send(500, err);
    }
    response.render('index', { movies: movies });
  });
});

app.get('/movies/:movieId', function (request, response) {
  response.send(500, "not implemented yet!");
});

app.post('/movies/:movieId/comments', function (request, response) {
  response.send(500, "not implemented yet!");
});

server.listen(8001, function(){
  console.log('listening in http://localhost:8001');
});