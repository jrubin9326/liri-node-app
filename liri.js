
const movie = require('./moviefinder.js')
// const spotify = require('./spotify.js')



switch (process.argv[2]) {
    case 'movie-this': 
       movie.movieSearch()
        break; 
    case 'spotify-this-song': 
        // spotify.Spotify()
        break;
    case 'concert-this':
        break;
    case 'do-what-it-says':
        break; 
    
}


