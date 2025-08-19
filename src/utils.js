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

export { renderErrorMessage };
