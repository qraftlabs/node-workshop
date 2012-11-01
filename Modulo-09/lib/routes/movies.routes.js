module.exports = function (app) {
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
    var movie = request.movie;

    movie.comments.push(request.body);
    movies.save(movie, function(err, result) {
      if(err){
        return response.send(500, err);
      }
      response.redirect("/movies/" + movie._id.toString() + "/");
      io.sockets
        .in(movie.name)
        .emit('new-comment', request.body);
    });
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
}