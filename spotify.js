const spotifyKey = require("./keys")
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: spotifyKey.id,
  secret: spotifyKey.secret
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

  