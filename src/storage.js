/**
 * functionality to save or remove a movie from favourites in localStorage.
 *
 * @param {Object} movie - The movie object to save or remove.
 * @param {HTMLElement} movieElement - The HTML element representing the movie.
 */

const saveMovieToLocalStorage = (movie, movieElement) => {
  const favIcon = movieElement.querySelector(".fav-icon");

  favIcon.addEventListener("click", () => {
    let currentFavourites =
      JSON.parse(localStorage.getItem("favouriteMovie")) || [];

    // Check if the movie is already in favourites
    const exists = currentFavourites.some((m) => m.id === movie.id);
    if (!exists) {
      // If movie not in favourites, add it
      currentFavourites.push({ ...movie, count: 1 });
      favIcon.setAttribute("fill", "red");
      console.log(`${movie.title} added to favourites.`);
    } else {
      //If movie already exists, remove it from favourites
      currentFavourites = currentFavourites.filter((m) => m.id !== movie.id);
      favIcon.setAttribute("fill", "none");
      console.log(`${movie.title} removed from favourites.`);
    }

    // Save the updated favourites list back to localStorage
    localStorage.setItem("favouriteMovie", JSON.stringify(currentFavourites));
  });
};

/**
 * functionality to save notes for a specific movie in localStorage.
 *
 * @param {Object} movie - The movie object to add notes.
 * @param {HTMLElement} movieElement - The HTML element representing the movie.
 */

const saveNotesToLocalStorage = (movie, movieElement) => {
  const notesIcon = movieElement.querySelector("#notes-icon");

  notesIcon.addEventListener("click", () => {
    const dialogOverlay = document.querySelector("#dialogOverlay");
    const noteText = document.querySelector("#noteText");
    const saveBtn = document.querySelector("#saveBtn");
    const closeBtn = document.querySelector("#closeBtn");
    const storageKey = "Notes";

    // Retrieve saved notes from localStorage
    const savedNotes = JSON.parse(localStorage.getItem(storageKey)) || [];

    //Check if a note already exists for this movie
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

      // Save updated notes list back to localStorage
      localStorage.setItem(storageKey, JSON.stringify(filtered));

      dialogOverlay.classList.add("hidden");
    };

    closeBtn.onclick = () => dialogOverlay.classList.add("hidden");

    // Also close dialog if user clicks on the overlay background
    dialogOverlay.onclick = (e) => {
      if (e.target === dialogOverlay) {
        dialogOverlay.classList.add("hidden");
      }
    };
  });
};

export { saveMovieToLocalStorage, saveNotesToLocalStorage };
