const dotenv = require("dotenv");
const fetch = require("node-fetch")

dotenv.config();

const myKey = process.env.API_KEY;

console.log(myKey)

const MOVIES = []

let url = `http://www.omdbapi.com/?apikey=${myKey}&`;

module.exports.getFewMovies = (req, res) => {
    fetch(`${url}&s="marvel"`)
        .then(res => res.json())
        .then(movies => {
            try {
                movies.Search.map((movie) => {
                    MOVIES.push(movie);
                    return res.json(MOVIES)
                })
            } catch {
                res.send("Error Has Occurred")
            }
        })
}

module.exports.searchMovie = (req, res) => {
    let searchInput = req.body.input; 
    fetch(`${url}&s="${searchInput}"`)
        .then(res => res.json())
        .then(movies => {
            try {
                movies.Search.map((movie) => {
                    return res.json(movie)
                })
            } catch {
                res.send("Error Has Occurred")
            }
        })
}
