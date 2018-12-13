const spotifyKey = require('./keys.js')
const Spotify = require('node-spotify-api');
const spotify = new Spotify({
    id: spotifyKey.id,
    secret: spotifyKey.secret
});

module.exports = {
    musicSearch: function () {
        
        const song = process.argv[3] ? song = process.argv.slice(3).join(' ') : song = "The Sign"; 
        spotify.search({ type: 'track', query: song })
            .then(function (response) {
                console.log(` You want to know information about ${song} ...The artist of this song : ${response.tracks.items[0].album.artists[0].name} \nFollow this link to view a sample of the song ${response.tracks.items[0].external_urls.spotify}. \n This song was released on the ${response.tracks.items[0].album.name} album. `)
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}


