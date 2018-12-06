
const movie = require('./moviefinder.js')
const spotify = require('./spotify.js')
const concert = require('./concertfinder.js')



switch (process.argv[2]) {
    case 'movie-this': 
       movie.movieSearch()
        break; 
    case 'spotify-this-song': 
        spotify.musicSearch()
        break;
    case 'concert-this':
        concert.concertSearch()
        break;
    // case 'do-what-it-says':
    //     break; 
    
}


