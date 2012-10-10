/**
 * Module dependencies
 */

var monk = require('monk');

/**
 * Expose db driver
 */

module.exports = function (host){
  var db = monk(host);

  /**
   * Expose collections
   */

  db.todos = db.get('todos');

  module.exports = db;
  return db;
};
