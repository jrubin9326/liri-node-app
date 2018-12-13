const fs = require('fs');
const Spotify = require('node-spotify-api');
const spotifyKey = require('./keys.js')
const spotify = new Spotify({
    id: spotifyKey.id,
    secret: spotifyKey.secret
});
module.exports = {
    randomSearch: function () {
        fs.readFile('./random.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error: ${err}`)
            }
            let dataArr = data.split(',');
            const task = dataArr[0];
            const input = dataArr[1]
            if (task === 'spotify-this-song') {
                spotify.search({ type: 'track', query: input })
                    .then(function (response) {
                        console.log(` You want to know information about ${input} ...The artist of this song : ${response.tracks.items[0].album.artists[0].name} \nFollow this link to view a sample of the song ${response.tracks.items[0].external_urls.spotify}. \n This song was released on the ${response.tracks.items[0].album.name} album. `)
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        })

    }
}



