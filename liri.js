require("dotenv").config();

var keys = require("./keys")

var Twitter = require("twitter");

var Spotify = require("node-spotify-api")

var http = require("request")

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

client.get('statuses/user_timeline', function(error, tweets, response) {
    if (error) throw error;
    let parsedTweets = tweets
    for (var i = 0; i < parsedTweets.length; i++) {
        console.log("tweet ", i+1, ": ",parsedTweets[i].text)
    }
});


spotify.search({
    type: 'track',
    query: 'All the Small Things'
}, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});