// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&

const apiKey = "624cd05f&";

const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  console.log(searchTerm);
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      results.textContent = data.Search[0].Title;
      console.log(data.Search[0].Title);
    })
});
