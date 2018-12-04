const spotifyKey = require('./keys')
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: spotifyKey.id,
  secret: spotifyKey.secret
});
var song; 
if  (process.argv[3] === undefined) {
    song = "The Sign"
} else {
    song = process.argv.slice(2).join(' ')
}
module.exports = {
  musicSearch : function() { spotify.search({ type: 'track', query: song })
  .then(function(response) {
    console.log(` You want to know information about ${song} ...The artist of this song : ${response.tracks.items[0].album.artists[0].name} \nFollow this link to view a sample of the song ${response.tracks.items[0].external_urls.spotify}. \n This song was released on the ${response.tracks.items[0].album.name} album. `)
  })
  .catch(function(err) {
    console.log(err);
  })
}
}