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
