const { initializeDataBase } = require("../db");
const fs = require("fs");
const Movie = require("./models/movies.models");

initializeDataBase();

const jsonData = fs.readFileSync("movies.json", "utf-8");

const moviesData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const movieData of moviesData) {
      const newMovies = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      newMovies.save();
      console.log(newMovies.title);
    }
  } catch (error) {
    console.log("Error to seeding the data", error);
  }
}
seedData();
