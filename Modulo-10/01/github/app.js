
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , stylus = require('stylus')
  , stylusCompiler = require('./lib/stylus-compiler')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);

  /**
   * Stylus support
   */

  app.use(stylus.middleware({
      src: __dirname + '/views/css'
    , dest: __dirname + '/public/css'
    , compile: stylusCompiler
  }));

  app.use(express.static(path.join(__dirname, 'public')));

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 * App routes
 */

app.get('/', routes.index);
app.get('/users', user.list);

/**
 * Create server
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
