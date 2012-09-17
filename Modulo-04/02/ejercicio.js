var http = require("http");

function searchTweets (searchTerm, callback){
  var url = "http://search.twitter.com/search.json?q=" + encodeURIComponent(searchTerm);
  http.get(url, function(res){
  
    var data = "";

    res.on("data", function(chunk){
      data += chunk;
    }).on("end", function(){
      callback(null, JSON.parse(data).results);
    });

  }).on("error", function(e){
    
    callback(e);
  
  });
}

// debería funcionar solo con esto
// var searchTweets = require("./searchTweets");

searchTweets("node.js" , function(err, tweets){
  tweets.map(function(tweet){
      return ["\x1B[35m", "@", tweet.from_user, "\x1B[39m", ": ", tweet.text, "\n"].join("");
  }).forEach(function(tweetMessage){
    console.log(tweetMessage);
  });
});