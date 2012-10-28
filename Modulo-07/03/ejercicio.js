var express = require('express'),
  app     = express(), 
  server  = require('http').createServer(app), 
  io      = require('socket.io').listen(server);

var db = require('./moviedb');

app.configure(function(){
  this.set('view engine', 'ejs');
  this.set('views', __dirname + '/views');
  this.use(express.bodyParser());
});

//middleware para mapear todos los parametros movieId
app.param('movieId', function(request, response, next, movieId){
  var movie = db.getById(request.params.movieId);
  if(movie){
    request.movie = movie;
    next();
  }else{
    request.send(404);
  }
});

app.get('/movies/:movieId', function (request, response) {
  response.render('movie', request.movie);
});

app.get('/', function (request, response){
  response.render('index', { movies: db });
});

app.post('/movies/:movieId/comments', function (request, response) {
  request.movie.comments.push(request.body);
  response.redirect("/movies/" + request.movie.id + "/");
  io.sockets.emit('new-comment', request.body);
});

io.sockets.on('connection', function (socket) {
  var room; //cuak!
    
  io.sockets.emit('usercount', io.sockets.clients().length);

  socket.on('disconnect', function () {
    io.sockets.emit('usercount', io.sockets.clients().length - 1);
  });
});

server.listen(8001, function(){
  console.log('listening in http://localhost:8001');
});