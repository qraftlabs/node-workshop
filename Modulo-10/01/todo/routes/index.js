
/**
 * Module dependencies
 */

var db = require('../lib/db')('localhost/wdba');

/*
 * GET home page.
 */

exports.index = function(req, res, next){
  db.todos.find({}, send);

  res.locals.formatDate = function(d){
    return [d.getDate(), d.getMonth(), d.getYear()].join('-');
  };

  function send(err, data){
    if (err) return next(err);
    res.render('index', { title: 'ToDo', todos: data });
  }
};
