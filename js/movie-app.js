"use strict";

{
    const getMovies = fetch("https://coconut-denim-leather.glitch.me/movies")
        .then(response => console.log(response.json()));
}

