// Importing functions for search rendering and event handling
import { renderSearchList, searchEventListners } from "../search.js";
import { toggleOverviewText } from "../app.js";
import { saveNotesToLocalStorage } from "../storage.js";

// DOM element container for the movie journal
const movieListContainer = document.querySelector("#movieList-journal");

searchEventListners();
renderSearchList();

/**
 * Fetches favorite movies from localStorage and renders them to the DOM.
 * Also enables toggling of the movie overview text and saving notes per movie.
 *
 * @function getMovieFromLocalStorage
 */
const getMovieFromLocalStorage = () => {
  // Get favorite movies from localStorage, defaulting to empty array
  const favouriteMovies =
    JSON.parse(localStorage.getItem("favouriteMovie")) || [];
  movieListContainer.innerHTML = ""; // Clear existing content
  favouriteMovies.forEach((movie) => {
    //overview text
    const shortOverview =
      movie.overview.length > 100
        ? movie.overview.slice(0, 100) + "..."
        : movie.overview;

    const movieElement = document.createElement("div");
    movieElement.className = "max-auto text-white rounded-lg shadow-md";

    // Set inner HTML of movie element with poster, title, notes icon, and overview;
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
    
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${movie.title}</h1>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-2"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file-text"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>
     <p class="text-gray-300">
        Info: <span class="short-text">${shortOverview}</span>
        <span class="full-text hidden">${movie.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>

    `;
    movieListContainer.appendChild(movieElement);
    toggleOverviewText(movieElement);

    // Enable saving of notes for this movie to localStorage
    saveNotesToLocalStorage(movie, movieElement);
  });
};

// Execute function to render favorite movies on page load
getMovieFromLocalStorage();
