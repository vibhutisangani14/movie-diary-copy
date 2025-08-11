const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const movieListContainer = document.querySelector("#movieList-container");

const api_key = "db85a489a7f0131f0f43f57e6a905f19";

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent closing immediately
  searchBox.classList.remove("w-0", "opacity-0", "mx-0");
  searchBox.classList.add("w-64", "opacity-100", "mx-2");
  searchBox.focus();
});

document.addEventListener("click", (e) => {
  if (!searchWrapper.contains(e.target)) {
    searchBox.classList.remove("w-64", "opacity-100", "mx-2");
    searchBox.classList.add("w-0", "opacity-0", "mx-0");
    searchBox.blur();
  }
});

//fetching Search list from The Movie Database API
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

//Rendering Search list to the DOM
renderSearchList = (movies, query) => {
  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );
  filtered.forEach((movie) => {
    const div = document.createElement("div");

    div.className =
      "flex flex-row px-3 py-2 hover:bg-gray-100 hover:text-black cursor-pointer";

    div.innerHTML = `
     <img
                    src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                    alt="demo"
                    class="w-[40px] h-[60px]"
                  />
                  <div class="flex flex-col justify-center">
                    <div class="ml-2 text-[0.8rem]">${movie.title}</div>
                  </div>`;

    div.addEventListener("click", () => {
      searchBox.value = movie.title;
      suggestions.classList.add("hidden");
    });
    suggestions.appendChild(div);
    suggestions.classList.toggle("hidden", filtered.length === 0);
  });
};

// Fetching and rendering the Search list
const fetchAndRenderSearchList = async (query) => {
  try {
    const movies = await fetchSearchList(query);
    console.log("Fetched movies:", movies);
    renderSearchList(movies, query);
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return;
  }
};

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  suggestions.innerHTML = "";

  if (query) {
    fetchAndRenderSearchList(query);
  } else {
    suggestions.classList.add("hidden");
  }
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#searchBox") &&
    !event.target.closest("#suggestions")
  ) {
    suggestions.classList.add("hidden");
  }
});

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
