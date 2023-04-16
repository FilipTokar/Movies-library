// document.querySelector("#input__btn").onclick = function getInput() {
//     return document.querySelector("#input__field").value
//     }

function getInput() {
    let input = document.querySelector("#input__field").value
    renderMovies(input)
} 

async function renderMovies (apiRoute) {
    
    const movies = await fetch(`http://www.omdbapi.com/?apikey=56cb40ec&s=${apiRoute}`)
    const moviesData = await movies.json()
    const firstSixMovies = moviesData.Search.slice(0,6)
    const moviesListElement = document.querySelector(".movies-list")

    moviesListElement.innerHTML = firstSixMovies.map((movie) => movieHTML(movie)).join("")
}




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

function clickInputButton (event) {
    let button = document.querySelector("#input__btn")
    if (event.keyCode === 13) {
        button.click()
    }
}