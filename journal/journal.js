const movieListContainer = document.querySelector("#movieList-journal");

const getMovieFromLocalStorage = () => {
  const favouriteMovies =
    JSON.parse(localStorage.getItem("favouriteMovie")) || [];
  movieListContainer.innerHTML = ""; // Clear existing content
  favouriteMovies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className =
      "max-auto bg-black text-white rounded-lg shadow-md";
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
      <div class="p-2">
        <h1 class="text-2xl font-bold mb-2">${movie.title}</h1>
        <p class="text-gray-300">Info: ${movie.overview}</p>
      </div>
    `;
    movieListContainer.appendChild(movieElement);
  });
};

getMovieFromLocalStorage();
