const api_key = "db85a489a7f0131f0f43f57e6a905f19";

//fetching movie list from The Movie Database API
const fetchMovieList = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${api_key}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};

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

export { fetchMovieList, fetchSearchList };
