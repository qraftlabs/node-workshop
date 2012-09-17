var twitter = require("./");

twitter.search("node.js", function(err, tweets){
  console.log(tweets);
});