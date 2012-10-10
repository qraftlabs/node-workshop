/**
 * Module dependencies
 */

var stylus = require('stylus');

/**
 * Expose `stylus compiler`
 */

module.exports = function (str, path) {
  return stylus(str)
    .set('filename', path)
    .set('warn', true);
};
