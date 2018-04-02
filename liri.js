require("dotenv").config();

var keys = require("keys")

var Twitter = require("twitter");

var Spotify = require("node-spotify-api")

var http = require("request")

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

/* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`
