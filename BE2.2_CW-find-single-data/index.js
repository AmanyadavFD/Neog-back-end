const { initializeDataBase } = require("../db");
const fs = require("fs");
const Movie = require("./models/movies.models");

initializeDataBase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Aditya Roy Chopra",
  actors: ["Actor1", "Actor2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on a Australia trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    console.log("New Movie Data:", saveMovie);
  } catch (error) {
    throw error;
  }
}

// createMovie(newMovie);

// Find the movie with particular title

async function readMovieTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    console.log(movie);
  } catch (error) {
    throw error;
  }
}

// readMovieTitle("Dilwale Dulhania Le Jayenge");

// Get the all the movies from the movies
async function getAllMovies(movies) {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (error) {
    throw error;
  }
}

// getAllMovies();

// Get the movies by director name

async function getMovieByDirectorName(directorName) {
  try {
    const movieDirector = await Movie.find({ director: directorName });
    console.log(movieDirector);
  } catch (error) {
    throw error;
  }
}
getMovieByDirectorName("Kabir Khan");
