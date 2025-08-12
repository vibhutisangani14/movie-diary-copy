import { renderSearchList, searchEventListners } from "./search.js";

const movieListContainer = document.querySelector("#movieList-container");
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
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");

    movieElement.className = "max-auto  text-white rounded-lg shadow-md";

    const currentFavourites =
      JSON.parse(localStorage.getItem("favouriteMovie")) || [];
    const isFavourite = currentFavourites.some((m) => m.id === movie.id);

    //overview text
    const shortOverview =
      movie.overview.length > 100
        ? movie.overview.slice(0, 100) + "..."
        : movie.overview;

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
      <p class="text-gray-300">
        Info: <span class="short-text">${shortOverview}</span>
        <span class="full-text hidden">${movie.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>
    `;
    movieListContainer.appendChild(movieElement);
    toggleOverviewText(movieElement);
    saveMovieToLocalStorage(movie, movieElement);
    saveNotesToLocalStorage(movie, movieElement);
  });
};

// Add toggle functionality
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

// Save Notes to local storage
const saveNotesToLocalStorage = (movie, movieElement) => {
  const notesIcon = movieElement.querySelector("#notes-icon");

  notesIcon.addEventListener("click", () => {
    const dialogOverlay = document.querySelector("#dialogOverlay");
    const noteText = document.querySelector("#noteText");
    const saveBtn = document.querySelector("#saveBtn");
    const closeBtn = document.querySelector("#closeBtn");
    const storageKey = "Notes";

    const savedNotes = JSON.parse(localStorage.getItem(storageKey)) || [];

    const existingNote = savedNotes.find((n) => n.id === movie.id);
    noteText.value = existingNote ? existingNote.content : "";

    dialogOverlay.classList.remove("hidden");

    saveBtn.onclick = () => {
      const filtered = savedNotes.filter((n) => n.id !== movie.id);

      if (noteText.value.trim()) {
        filtered.push({
          id: movie.id,
          content: noteText.value.trim(),
        });
      }

      localStorage.setItem(storageKey, JSON.stringify(filtered));

      dialogOverlay.classList.add("hidden");
    };

    closeBtn.onclick = () => dialogOverlay.classList.add("hidden");
    dialogOverlay.onclick = (e) => {
      if (e.target === dialogOverlay) {
        dialogOverlay.classList.add("hidden");
      }
    };
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
