const axios = require("axios"); 
const moment = require("moment")
const artist = process.argv.slice(2).join(" ");
console.log(artist)
const bandsURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id=codingbootcamp"
function concertSearch() {    
    axios.get(bandsURL).then(
        function (response) {
            // for (let i  = 0; i < response.venue.length; i++)
            console.log(response.data[0].venue.name, response.data[0].venue.city, response.data[0].venue.region, response.data[0].datetime)
        }
    ).catch ((err) => {
        if (err) {
            console.log(`Error: ${err}`)
        }; 
    })
    }
concertSearch(); 



