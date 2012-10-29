var movies = module.exports;
var getDb = require('./data');
var ObjectID = require('mongodb').ObjectID;

movies.getById = function (id, callback) {
  getDb(function (db) {
    db.collection('movies')
      .findOne({_id: new ObjectID(id)}, function (err, result) {
        callback(err, result);
      });
  });
};

movies.getAll = function (callback) {
  getDb(function (db) {
    db.collection('movies')
      .find({})
      .toArray(function (err, result) {
        callback(err, result);
      });
  });
};