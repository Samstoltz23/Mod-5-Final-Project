// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&s=romance
const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const button = document.querySelector("#searchButton");
const results = document.querySelector("#results");


const apiKey = http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const searchTerm = input.value.trim();

  if (!searchTerm){
    results.textContent = "Enter a movie title to search.";
    return;
  }

  button.classList.add("is-loading");
  button.disabled = true;
  results.textContent = "searching...";

  try{
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=624cd05f&s=${encodeURIComponent(genre__link)}`
    );
    const data = await response.json();

    if (data.Response === "False"){
      results.textContent = data.Error;
      return;
    }
  }

  results.innerHTML = data.Search.map((movie) => 
    `<article class="movie-card">
      <img
        src="${movie.Poster !== "N/A" ? movie.Poster : ""}"
        alt="Poster for ${movie.Title}"
      >
      <h3>${movie.Title}</h3>
      <p>${movie.Year} · ${movie.Type}</p>
    </article>
    `).join("");
  } catch(error){
    results.textContent = "Something went wrong. Please try again.";
    console.error(error);
  } finally{
   button.classList.remove("is-loading");
   button.disabled = false;
}
)



const movie = [
  {
     "Title":"The Fast and the Furious",
     "Year":"2001",
     "Poster":"https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"True Romance",
    "Year":"1993",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzQ5OGMwMDAtMzcyOS00YTA4LWEwM2MtOTA1MDZjZGEyYmI1XkEyXkFqcGc@._V1_SX300.jpg"
  }
]
results.innerHTML = movies.map(movie =>
   `<article class="movie-card">
    <img src="${movie.poster}" alt="Poster for ${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.year}</p>
  </article>`
`).join("");
)


{"Search":[
  {
    "Title":"The Fast and the Furious","Year":"2001",
    "imdbID":"tt0232500",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"Fast & Furious 6",
    "Year":"2013",
    "imdbID":"tt1905041",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"

  },
  {
    "Title":"Fast Five",
    "Year":"2011",
    "imdbID":"tt1596343",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"

  },
  {"Title":"Fast & Furious",
    "Year":"2009",
    "imdbID":"tt1013752",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"

  },
  {
    "Title":"The Fast and the Furious: Tokyo Drift",
    "Year":"2006",
    "imdbID":"tt0463985",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"

  },
  {"Title":"2 Fast 2 Furious",
    "Year":"2003",
    "imdbID":"tt0322259",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"

  },
  {
    "Title":"Fast & Furious Presents: Hobbs & Shaw",
    "Year":"2019",
    "imdbID":"tt6806448",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg"

  },
  {
    "Title":"F9: The Fast Saga",
    "Year":"2021",
    "imdbID":"tt5433138",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg"

  },
  {
    "Title":"Fast X",
    "Year":"2023",
    "imdbID":"tt5433140",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg"

  },
  {
    "Title":"Fast Times at Ridgemont High","Year":"1982",
    "imdbID":"tt0083929",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg"

  }
],"totalResults":"961","Response":"True"}
{"Search":[
  {
    "Title":"True Romance",
    "Year":"1993",
    "imdbID":"tt0108399",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzQ5OGMwMDAtMzcyOS00YTA4LWEwM2MtOTA1MDZjZGEyYmI1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"College Romance",
    "Year":"2018–2023",
    "imdbID":"tt8809646",
    "Type":"series",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDlkNzI2MWUtYTkyOS00MTkxLTg0YzctZmQwNjExYjQzOTc1XkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_SX300.jpg"
  },
  {
    "Title":"Romance",
    "Year":"1999",
    "imdbID":"tt0194314",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZmIzM2JjMzMtZWM0OS00ZjNiLWFiYTAtZTNjNzZjMzdjZDI5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
  },
  {
    "Title":"Romance & Cigarettes",
    "Year":"2005",
    "imdbID":"tt0368222",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTliNWE0MTMtNTBmYS00NWVhLThkYzAtMTAxMzMyZDNhNmQwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"Office Romance",
    "Year":"1977",
    "imdbID":"tt0076727",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNTRmYjhkYzEtYTI3Zi00MGExLThiYWItYjIzZWFkZDdjY2E3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"Shuddh Desi Romance",
    "Year":"2013",
    "imdbID":"tt2988272",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTU0NjI2MTI0Ml5BMl5BanBnXkFtZTcwNjI4MzY5OQ@@._V1_SX300.jpg"},
  {"Title":"Romance Is a Bonus Book","Year":"2019",
    "imdbID":"tt9130542",
    "Type":"series",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNmVmNmI0MzAtMzljNy00MjQ2LWI0NzktYzkwNzZmZWM1NTQ3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg"
  },
  {
    "Title":"Murphy's Romance",
    "Year":"1985",
    "imdbID":"tt0089643",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDU3ZjA1YzktNDUxNy00MDVmLTlhMGQtYjljNjcwMTcwNzZiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title":"A Little Romance",
    "Year":"1979",
    "imdbID":"tt0079477",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTg1YjQ1ZWYtMDRkNi00MDNhLTk4ZTQtM2I1MTNmNzg4MGQ4XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg"
  },
  {"Title":"Crash Course in Romance",
    "Year":"2023",
    "imdbID":"tt24578016",
    "Type":"series",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZGE1ODM5MjktMGY0MS00NjA4LWFiOWItN2ZhZTYzN2RmNmM2XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg"
  }
],"totalResults":"1704","Response":"True"}