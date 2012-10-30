var movies = exports;
var getDb = require('./data');
var ObjectID = require('mongodb').ObjectID;

movies.getAll = function (callback) {
  getDb(function (db) {
    db.collection('movies')
      .find({}, {sort: [['name', 1]] })
      .toArray(function (err, result) {
        callback(err, result);
      });
  });
};

movies.getById = function (id, callback) {
  getDb(function (db) {
    db.collection('movies')
      .findOne({_id: new ObjectID(id)}, function (err, result) {
        callback(err, result);
      });
  });
};

movies.create = function (movie, callback) {
  movie.comments = movie.comments || []; 
  getDb(function (db) {
    db.collection('movies')
      .insert(movie, function (err, result) {
        if(err) return callback(err);
        callback(err, result[0]);
      });
  });
};

movies.save = function (movie, callback) {
  movie.comments = movie.comments || []; 
  getDb(function (db) {
    db.collection('movies')
      .save(movie, function (err, result) {
        if(err) return callback(err);
        callback(err, movie);
      });
  });
};