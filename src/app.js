// Importing necessary functions from other modules
import { renderSearchList, searchEventListners } from "./search.js";
import { saveMovieToLocalStorage, saveNotesToLocalStorage } from "./storage.js";
import { fetchMovieList } from "./network.js";

// Container where movies will be rendered
const movieListContainer = document.querySelector("#movieList-container");

// Initialize search functionality
searchEventListners();
renderSearchList();

/**
 * Renders a list of movies into the DOM.
 * @param {Array} movies - Array of movie objects fetched from API.
 */
const renderMovieList = (movies) => {
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className = "max-auto text-white rounded-lg shadow-md";

    // Get current favourite movies from localStorage
    const currentFavourites =
      JSON.parse(localStorage.getItem("favouriteMovie")) || [];
    const isFavourite = currentFavourites.some((m) => m.id === movie.id);

    // Shorten movie overview if it's too long
    const shortOverview =
      movie.overview.length > 100
        ? movie.overview.slice(0, 100) + "..."
        : movie.overview;

    // Movie card HTML structure
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
      movie.title
    } poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
      
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${movie.title}</h1>
        
        <!-- Favourite Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="${isFavourite ? "red" : "none"}" 
             viewBox="0 0 24 24" stroke-width="1.5" 
             stroke="currentColor" 
             class="w-5 h-5 cursor-pointer fav-icon hover:scale-110 transition-transform w-1/6 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" 
                d="M21.435 4.582a5.373 5.373 0 00-7.606 0L12 6.41l-1.829-1.828a5.373 5.373 0 00-7.606 7.606l1.828 1.828L12 21.435l7.607-7.606 1.828-1.828a5.373 5.373 0 000-7.606z" />
        </svg>
        
        <!-- Notes Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-1"
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

      <!-- Movie Overview -->
      <p class="text-gray-300">
        Info: <span class="short-text">${shortOverview}</span>
        <span class="full-text hidden">${movie.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>
    `;

    // Append movie card to container
    movieListContainer?.appendChild(movieElement);

    // Add toggle functionality for overview text
    toggleOverviewText(movieElement);

    // Save favourite movies and notes to localStorage
    saveMovieToLocalStorage(movie, movieElement);
    saveNotesToLocalStorage(movie, movieElement);
  });
};

/**
 * Adds "Read more / Read less" toggle functionality for movie overview.
 * @param {HTMLElement} movieElement - The movie card element.
 */
const toggleOverviewText = (movieElement) => {
  const toggleBtn = movieElement.querySelector(".toggle-btn");
  const shortText = movieElement.querySelector(".short-text");
  const fullText = movieElement.querySelector(".full-text");

  toggleBtn.addEventListener("click", () => {
    if (fullText.classList.contains("hidden")) {
      shortText.classList.add("hidden");
      fullText.classList.remove("hidden");
      toggleBtn.textContent = "Read less";
    } else {
      shortText.classList.remove("hidden");
      fullText.classList.add("hidden");
      toggleBtn.textContent = "Read more";
    }
  });
};

/**
 * Renders an error message on the UI.
 * @param {string} message - The error message to display.
 */
const renderErrorMessage = (message) => {
  if (!movieListContainer) return;
  movieListContainer.innerHTML = `
    <div class="flex justify-center items-center w-full">
      <div class="max-w-md w-full text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        <strong class="font-bold">Error: </strong>
        <span class="block sm:inline">${message}</span>
      </div>
    </div>
  `;
};

/**
 * Fetches movie list from API and renders it.
 * Displays error message if fetch fails.
 */
const fetchAndRenderMovieList = async () => {
  try {
    const movies = await fetchMovieList();

    if (!movies || movies.length === 0) {
      console.warn("No movies found from API.");
      renderMovieList([]);
      return;
    }
    console.log("Fetched movies:", movies);
    renderMovieList(movies);
  } catch (error) {
    console.error("Error fetching movie list:", error);
    renderErrorMessage("Failed to load movies. Please try again later.");
  }
};

// Fetch movies on page load
fetchAndRenderMovieList();

export { toggleOverviewText };
