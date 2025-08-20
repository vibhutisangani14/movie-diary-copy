// API key for accessing The Movie Database (TMDb) API
const api_key = "db85a489a7f0131f0f43f57e6a905f19";

/**
 * Fetches a list of popular movies from TMDb API.
 *
 * @async
 * @function fetchMovieList
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 * @throws {Error} Throws an error if the API response is not OK.
 */
const fetchMovieList = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${api_key}`
  );
  // Handle network errors (non-200 responses)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results; // Return only the results (movie array)
};

/**
 * Fetches a list of movies matching a search query from TMDb API.
 *
 * @async
 * @function fetchSearchList
 * @param {string} queryP - The search query string (e.g., movie title).
 * @returns {Promise<Array>} A promise that resolves to an array of matching movie objects.
 * @throws {Error} Throws an error if the API response is not OK.
 */
const fetchSearchList = async (queryP) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${queryP}&
    include_adult=false&language=en-US&page=1&api_key=${api_key}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};

// Exporting functions for use in other modules
export { fetchMovieList, fetchSearchList };
