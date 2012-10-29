var mongodb = require("mongodb"), 
    cachedDb;

var dbConnectionSettings = {
  host: "ds041347.mongolab.com",
  port: 41347,
  name: "movies",
  user: "mmuser",
  pass: "mm123123"
};

var db = new mongodb.Db(dbConnectionSettings.name,
  new mongodb.Server(dbConnectionSettings.host, dbConnectionSettings.port, 
    {auto_reconnect: true, poolSize: 2}), 
    {safe: true}
);


module.exports = function(callback){
  if(!cachedDb){
    db.open(function (err, db){
      if ( err ) {
        console.log("error connecting to the db", err);
        return process.exit();
      }
      if (!dbConnectionSettings.user) {
        cachedDb = db;      
        return callback(db);
      } else {
        db.authenticate(
            dbConnectionSettings.user, 
            dbConnectionSettings.pass, 
            function (err, replies) {
          if (err) {
            console.log("error connecting to the db", err);
            return process.exit();
          }
          cachedDb = db;
          callback(db);
        });
        return;
      }
    });
    return;
  }
  callback(cachedDb);
};