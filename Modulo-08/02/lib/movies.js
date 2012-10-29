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
    callback("error implementame!");
  });
};