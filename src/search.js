import { fetchSearchList } from "./network.js";
import { renderErrorMessage } from "./utils.js";

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

/**
 * Adds event listeners for the search UI
 * - Clicking the search button expands the search box.
 * - Clicking outside the search box collapses it.
 */
const searchEventListners = () => {
  searchBtn.addEventListener("click", (e) => {
    // Prevent closing immediately
    e.stopPropagation();
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
};

const renderSearchList = () => {
  //fetching Search list from The Movie Database API
  fetchSearchList();

  /**
   * Renders a filtered list of movies into the dialog.
   *
   * @param {Array} movies - Array of movie objects from the API.
   * @param {string} query - Current search input text to filter movies.
   */
  const renderSearchList = (movies, query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    filtered.forEach((movie) => {
      const div = document.createElement("div");

      div.className =
        "flex flex-row px-3 py-2 hover:bg-gray-700 cursor-pointer";

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

  /**
   * Fetches movies and render results.
   *
   * @param {string} query - The search query input.
   */
  const fetchAndRenderSearchList = async (query) => {
    try {
      const movies = await fetchSearchList(query);
      if (!movies || movies.length === 0) {
        console.warn("No Movies found");
        renderSearchList([]);
      }
      console.log("Fetched movies:", movies);
      renderSearchList(movies, query);
    } catch (error) {
      console.error("Error fetching movie list:", error);
      renderErrorMessage("failed to load movies please try again");
      return;
    }
  };

  // Listen for input changes display suggestions
  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    suggestions.innerHTML = "";

    if (query) {
      fetchAndRenderSearchList(query);
    } else {
      suggestions.classList.add("hidden");
    }
  });

  // Hide suggestions if user clicks outside search box list
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest("#searchBox") &&
      !event.target.closest("#suggestions")
    ) {
      suggestions.classList.add("hidden");
    }
  });
};

export { searchEventListners, renderSearchList };
