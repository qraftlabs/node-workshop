var request = require("request");

function searchTweets (searchTerm, callback){
  var url = "http://search.twitter.com/search.json?q=" + encodeURIComponent(searchTerm);
  request.get(url, function(err, resp, body){
    if(err) return callback(err);
    callback(null, JSON.parse(body).results);
  });  
}

exports.search = searchTweets;