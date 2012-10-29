var getDb = require('./data');

exports.getAll = function (callback) {
  getDb(function (db) {
    callback("ERROR implementame!!");
  });
};