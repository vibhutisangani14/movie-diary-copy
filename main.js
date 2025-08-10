console.log("hello");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent closing immediately
  searchInput.classList.remove("w-0", "opacity-0", "mx-0");
  searchInput.classList.add("w-64", "opacity-100", "mx-2");
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!searchWrapper.contains(e.target)) {
    searchInput.classList.remove("w-64", "opacity-100", "mx-2");
    searchInput.classList.add("w-0", "opacity-0", "mx-0");
    searchInput.blur();
  }
});
//fetching movie list from The Movie Database API
const fetchMovieList = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=db85a489a7f0131f0f43f57e6a905f19"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};

//Rendering movie list to the DOM
renderMovieList = (movies) => {
  movies.forEach((movie) => {
    const movieListContainer = document.querySelector("#movieList-container");
    const movieElement = document.createElement("div");
    movieElement.className =
      "max-auto bg-black text-white rounded-lg shadow-md";
    movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" 
            class=" border-gray-800 rounded-lg border-4 hover:border-white
            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
            <div class="p-2">
              <h1 class="text-2xl font-bold mb-2">${movie.title}</h1>
              <p class="text-gray-300">Info: ${movie.overview}</p>
            </div>
      `;
    movieListContainer.appendChild(movieElement);
  });
};

// Fetching and rendering the movie list
const fetchAndRenderMovieList = async () => {
  try {
    const movies = await fetchMovieList();
    console.log("Fetched movies:", movies);
    renderMovieList(movies);
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return;
  }
};
fetchAndRenderMovieList();
