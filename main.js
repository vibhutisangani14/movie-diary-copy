import { renderSearchList, searchEventListners } from "./search.js";

const movieListContainer = document.querySelector("#movieList-container");
const imageContainer = document.querySelector("#image-container");

const api_key = "db85a489a7f0131f0f43f57e6a905f19";

searchEventListners();
renderSearchList();

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

//Rendering movie list to the DOM
const renderMovieList = (movies) => {
  imageContainer.innerHTML = `
    <img
          src="https://image.tmdb.org/t/p/w500${movies[3].backdrop_path}]"
          alt="Poster"
          class="w-full h-[400px] cover"
        />`;

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");

    movieElement.className =
      "max-auto bg-black text-white rounded-lg shadow-md";

    const currentFavourites =
      JSON.parse(localStorage.getItem("favouriteMovie")) || [];
    const isFavourite = currentFavourites.some((m) => m.id === movie.id);

    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
      movie.title
    } poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${movie.title}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="${isFavourite ? "red" : "none"}" 
             viewBox="0 0 24 24" stroke-width="1.5" 
             stroke="currentColor" 
             class="w-5 h-5 cursor-pointer fav-icon hover:scale-110 transition-transform w-1/6 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" 
                d="M21.435 4.582a5.373 5.373 0 00-7.606 0L12 6.41l-1.829-1.828a5.373 5.373 0 00-7.606 7.606l1.828 1.828L12 21.435l7.607-7.606 1.828-1.828a5.373 5.373 0 000-7.606z" />
        </svg>
      </div>
      <p class="text-gray-300">Info: ${movie.overview}</p>
    `;

    movieListContainer.appendChild(movieElement);
    saveMovieToLocalStorage(movie, movieElement);
  });
};

// Save movie to local storage
const saveMovieToLocalStorage = (movie, movieElement) => {
  const favIcon = movieElement.querySelector(".fav-icon");

  favIcon.addEventListener("click", () => {
    let currentFavourites =
      JSON.parse(localStorage.getItem("favouriteMovie")) || [];

    const exists = currentFavourites.some((m) => m.id === movie.id);

    if (!exists) {
      currentFavourites.push({ ...movie, count: 1 });
      favIcon.setAttribute("fill", "red");
      console.log(`${movie.title} added to favourites.`);
    } else {
      currentFavourites = currentFavourites.filter((m) => m.id !== movie.id);
      favIcon.setAttribute("fill", "none");
      console.log(`${movie.title} removed from favourites.`);
    }

    localStorage.setItem("favouriteMovie", JSON.stringify(currentFavourites));
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
