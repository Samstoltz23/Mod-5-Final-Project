// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&

 const apiKey = "624cd05f&";

 const form = document.querySelector("#searchForm");
 const input = document.querySelector("#searchInput");
 const results = document.querySelector("#results");
 const genreLinks = document.querySelectorAll(".genre__link");


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = input.value.trim();
    console.log(searchTerm);
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        results.innerHTML = data.Search.map(
          (movie) => `
          <article class="movie-card">
            ${
              movie.Poster && movie.Poster !== "N/A"
              ? `<img src="${movie.Poster}" alt="Poster for ${movie.Title}">`
              : `<div class="poster-placeholder"> No poster available</div>`
            }
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          </article>
          `
        ).join("");
      })
  });

 genreLinks.forEach((link) => {
   link.addEventListener("click", (event) => {
     event.preventDefault();
     const genre = event.currentTarget.dataset.genre;
     console.log(genre);
   });
 });









