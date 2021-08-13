/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  movieArr = [];
  for (let i = 0; i < movies.length; i++) {
    movieArr.push(movies[i].title);
  }
  return movieArr;
}
// console.log(getAllMovieTitles(exampleMovies));
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  c;
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetascore = 0;

  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].metascore) > highestMetascore) {
      highestMetascore = Number(movies[i].metascore);
    }
  }
  return highestMetascore;
}
// console.log(getHighestMetascore(exampleMovies));
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
//helper function
function roundNum(num) {
  return Number(num.toFixed(2));
}
function getAverageIMDBRating(movies) {
  avgRatings = 0;
  for (let i = 0; i < movies.length; i++) {
    avgRatings += Number(movies[i].imdbRating) / movies.length;
  }
  return roundNum(avgRatings);
}
// console.log(getAverageIMDBRating(exampleMovies));
/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  obj = {};
  for (let i = 0; i < movies.length; i++) {
    if (obj[movies[i].rated]) {
      obj[movies[i].rated] += 1;
    } else {
      obj[movies[i].rated] = 1;
    }
  }
  return obj;
}
// console.log(countByRating(exampleMovies));
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  obj = {};
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      return (obj = movies[i]);
    }
  }
  return null;
}
// console.log(findById(exampleMovies, "tt1979376"));

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let matchingGenre = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toUpperCase().includes(genre.toUpperCase())) {
      matchingGenre.push(movies[i]);
    }
  }
  return matchingGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let moviesReleased = [];

  for (let movie of movies) {
    if (year >= Number(movie.released.slice(-4))) {
      // console.log(movie);
      moviesReleased.push(movie);
    }
  }
  return moviesReleased;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if (!movies.length) {
    return null;
  }
  //helper function
  function convertToNumber(numberString) {
    let num = "";
    for (let char of numberString) {
      if (!isNaN(Number(char))) {
        num += char;
      }
    }
    return Number(num);
  }

  let numberOneBoxOffice = movies[0];

  for (let currMovie of movies) {
    //iterating through the movies array movie is the currMovie object
    if (
      convertToNumber(currMovie.boxOffice) >
      convertToNumber(numberOneBoxOffice.boxOffice)
    ) {
      // if the current movie we are looking at has a boxoffice greater than our current boxoffice numberOneBoxOffice then proceed
      numberOneBoxOffice = currMovie; //reassigns the value of numberOneBoxOffice since the currMovie has a greater boxoffice
    }
  }
  return numberOneBoxOffice.title;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
