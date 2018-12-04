var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
var movieName; 
module.exports = {
    movieSearch: function movieSearch() {
        process.argv[3] === undefined ? movieName ="Mr.Nobody" : movieName = process.argv.slice(3).join(" ")
        queryURL = "http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy"
        axios.get(queryURL).then(
        function(response) {
        console.log(`Here is some information about ${movieName}. It was released on ${response.data.Released} \nThe plot of the movie is ${response.data.Plot}
        \n The rating of the movie is ${response.data.Rated} \n The language of the movie is in ${response.data.Language} \n The actors in the movie are ${response.data.Actors} \n The Rotten Tomatoes Rating is ${response.data.Ratings[1].Value} and the IMBD rating is ${response.data.Ratings[0].Value}\nLastly this movie was produced in ${response.data.Country}`)
        });
    }
}


