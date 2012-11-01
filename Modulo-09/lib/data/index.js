var mongodb = require("mongodb"), 
    cachedDb;

var dbConnectionSettings = process.env.db_host ? {
  host: process.env.db_host,
  port: parseInt(process.env.db_port, 10),
  name: process.env.db_name,
  user: process.env.db_user,
  pass: process.env.db_pass
} : {
  host: "localhost",
  port: 27017,
  name: "movies"
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
        console.log("authenticating");
        db.authenticate(
            dbConnectionSettings.user, 
            dbConnectionSettings.pass, 
            function (err, replies) {
          if (err) {
            console.log("error connecting to the db", err);
            return process.exit();
          }
          console.log("authenticated");
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