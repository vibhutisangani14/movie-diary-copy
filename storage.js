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

export { saveMovieToLocalStorage, saveNotesToLocalStorage };
