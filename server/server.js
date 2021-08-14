const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Movies = require('./movies-db');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.listen(PORT, () => console.log(`🦁 Server Started: ${PORT}`));

app.use(
    cors({
      origin: "http://localhost:4200",
      credentials: true
    })
);
  
// *********
// Routing
// *********

app.get("/", (req, res) => {
    res.write(`
    <div style="font-family:'Segoe UI', sans-serif; text-align:center;">
    <div style="display:flex; justify-content: center;">
    <h1 style="font-family:'Segoe UI', sans-serif; color: tomato;">
    Welcome To Roni's DB Server
    </h1>
    </div>
    <div>
    <p>This is the Backend for my little app, which takes data from API to my server </p>
    </div>
    <h2>Enjoy :)</h2>
    <img  style="border-radius:50%; border:3px solid tomato; width: 80px; height: 80px;" src="https://raw.githubusercontent.com/RoniAksel/this-is-a-todo-list-with-my-face/master/img/roni.png" alt="Pic of me"></img> 
    </div>`)
})

app.get("/api/movies", Movies.getFewMovies);
app.get("/api/movie", Movies.searchMovie);

