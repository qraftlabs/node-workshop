var getDb = require('./data');

exports.getAll = function (callback) {
  getDb(function (db) {
    db.collection('movies')
      .find({}, {sort: [['name', 1]] })
      .toArray(function (err, result) {
        callback(err, result);
      });
  });
};