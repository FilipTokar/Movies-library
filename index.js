let movies

async function renderMovies() {
    let input = document.querySelector("#input__field").value
    const moviesListElement = document.querySelector(".movies-list")
    const searchTitleElement = document.querySelector(".search__title")
    
    moviesListElement.classList += " movies__loading"

    if(!movies) {
    movies = await getMovies(input)
    }
    const moviesData = await movies.json()
    const firstSixMovies = moviesData.Search.slice(0,6)

    moviesListElement.classList.remove("movies__loading")
    
    searchTitleElement.innerHTML += ` for: <span class="search__title--black">${input}</span>`
    moviesListElement.innerHTML = firstSixMovies.map((movie) => movieHTML(movie)).join("")

    function movieHTML (movie) {
        return `<div class="movie">
        <div class="movie-card">
            <div class="movie-card__container">
                <figure class="movie__img--container">
                    <img class="movie__img" src="${movie.Poster}" alt="">
                </figure>
                <p class="movie__para"><b>Title:</b> ${movie.Title}</p>
                <p class="movie__para"><b>Year:</b> ${movie.Year}</p>
            </div>
        </div>
    </div>`
    }
} 

function getMovies (apiRoute) {
    return new Promise ((resolve) => {
        resolve(fetch(`http://www.omdbapi.com/?apikey=56cb40ec&s=${apiRoute}`))  
    })  
}


function clickInputButton (event) {
    let button = document.querySelector("#input__btn")
    if (event.keyCode === 13) {
        button.click()
    }
}