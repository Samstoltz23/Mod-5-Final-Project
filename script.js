// Send all data requests to: http://www.omdbapi.com/?apikey=[624cd05f]&
// Poster API requests: http://img.omdbapi.com/?apikey=[624cd05f]&
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&

 const apiKey = "624cd05f&";

 const form = document.querySelector("#searchForm");
 const input = document.querySelector("#searchInput");
 const results = document.querySelector("#results");
 const sortSelect = document.querySelector("#sortSelect");


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = input.value.trim();
    console.log(searchTerm);
    results.setAttribute("aria-busy", "true");
    showSkeletons();
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
        results.removeAttribute("aria-busy");
      })
  });


function showSkeletons(count = 6){
  results.innerHTML = `
    <p class="sr-only" role="status">Loading movies...</p>
    ${Array.from({ length: count }, () =>`
      <article class="movie-card skeleton-card" aria-hidden="true">
        <div class="skeleton skeleton-poster"></div>
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-year"></div>
      </article>
    `).join("")}
  `;
}

sortSelect.addEventListener("change", () => {
  const cards = Array.form(results.querySelectorAll(".movie-card"));

  cards.sort((a, b) => {
    const titleA = a.querySelector("h3").textConent;
    const titleB = b.querySelector("h3").textContent;
    const yearA = Number.parseInt(a.querySelector("p").textContent, 10) || 0;
    const yearB = Number.parseInt(b.querySelector("p").textContent, 10) || 0;

    switch (sortSelect.value) {
      case "za":
        return titleB.localCompare(titleA);
      case "newest":
        return yearB - yearA;
      case "oldest":
        return yearA - yearB;
      default:
        return titleA.localCompare(titleB);
    }
  });
  results.append(...cards);
});