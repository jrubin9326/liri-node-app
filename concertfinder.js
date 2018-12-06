const axios = require("axios");
const moment = require("moment");

module.exports = {
    concertSearch: function () {
        const artist = process.argv.slice(3).join(" ");
        const bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios.get(bandsURL).then(function (response) {
            if (response.data.length === 0) {
                console.log(`Sorry, it looks like ${artist} has no upcoming tourdates`)

            } else {
                for (var i = 0; i < response.data.length; i++) {
                    console.log(`${artist} will play at ${response.data[i].venue.name} in ${response.data[i].venue.region}, on ${moment(response.data[i].datetime).format('MM-DD-YYYY')}`)
                }
            }
        }).catch((err) => {
            if (err) {
                console.log(`Error: ${err}`)
            };
        })
    }
}

