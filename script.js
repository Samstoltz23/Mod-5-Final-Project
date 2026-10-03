// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&

const apiKey = "624cd05f&";

const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const results = document.querySelector("#results");
const genreLinks = document.querySelector(".genre__link");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  console.log(searchTerm);
  fetch (`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = data.Search
      .slice(0, 10)
      .map((movie) => `<p>${movie.Title}`)
      .join("");

    })
});

genreLinks.addEventListener("change", (event) => {
  const genreLinks = event.target.value;
  console.log(genreLinks);
});

