"use strict";

$(document).ready(function() {
    const URL = "https://coconut-denim-leather.glitch.me/movies"
    let title = $("#title");
    let popcorns = $("#popcorns");
})
//TEST IN CONSOLE
//     const getMovies = fetch("https://coconut-denim-leather.glitch.me/movies")
//         .then(response => console.log(response.json()));

    const getMovies = fetch("https://coconut-denim-leather.glitch.me/movies")
        .then(response => response.json())
        .catch(console.error);

    const getMovie = fetch("https://coconut-denim-leather.glitch.me/movies")
        .then(response => response.json())
        .catch(console.error);


// menu 
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

{

    const addMovie = (movie) => fetch("https://coconut-denim-leather.glitch.me/movies", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            console.log(${JSON.stringify(data)} + " has been created");
            return data.id;
        })
        .catch(console.error);

    // const editMovie =
    const deleteMovie = id => fetch("https://coconut-denim-leather.glitch.me/movies", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => {
            console.log("deleted successfully");
        })
        .catch(console.error);


    $("#add-button").click(function () {
        postMovie({
            "title": $("#movie-title-input").val(),
            "popcorns": $("#popcorns").val()
        });
        refreshMovies();
    });

//$(document).ready(() => {

                let mainContainer = () => {
                    return $("main");
                };
                // let modalLabel = () => {
                //     return $("#modalLabel");   ///MODAL FOR LOADING???
                // };

                let titleInput = () => {
                    return $("#titleInput");
                };

                let modalLabel = '';
                let movieCard;
                let allMovies = [];
                // SELECTED EDITABLE MOVIE
                let selectedTitle = '';
                let selectedPopcorns;


                // $("main").html("loading...");
                // Splash Loader
                $("main").html(`<div id="loader-container"><img class="loaderImage" src="img/????????.gif"></div>`);
                // $("#loadingSection").hide();

                const renderMovieList = (title, popcorns, id) => {
                    let content = `<div class="card">`;
                    content += `<div class="card-header" id="heading${id}">`;
                    // content += `<div class="card-header" id="heading` + id + ">";
                    content += `<h5 class="mb-0">`;
                    content += `<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">`;
                    content += `${title} - Popcorns: ${popcorns}`;
                    content += `</button>`;
                    content += `</h5>`;
                    content += `</div>`;
                    // content += `<div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordian">`;
                    content += `<div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#myGroup">`;
                    content += `<div class="movie-content-container card-body">`;
                    content += `<div class="movie-description">
I don't 'need' to drink. I can quit anytime I want! Do a flip! Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. Moving along… Now Fry, it's been a few years since medical school, so remind me. Disemboweling in your species: fatal or non-fatal?
</div>`;
                    content += `<button type="button" id="editButton-${id}" class="edit-button btn btn-warning btn-sm" data-toggle="modal" data-target="#modal">
                    Edit
                </button>`;
                    content += `<button type="button" id="deleteButton-${id}" class="delete-button btn btn-danger btn-sm" data-toggle="modal" data-target="#modal">
                    Delete
                </button>`;
                    content += `</div>`;
                    content += `</div>`;
                    content += `</div>`;

                    return content
                };

                const renderList = (title = "All Your Movies") => {
                    $('#splashImage').attr("src", loaderJumbotron);
                    getMovies()
                        .then((movieList) => {
                            allMovies = movieList;
                            console.log(allMovies);
                            setTimeout(() => {
                                mainContainer().html(title);
                                mainContainer().append(`<div id="accordion">`);
                                movieList.forEach(({title, popcorns, id}) => {
                                    $("#accordion").append(renderMovieList(title, popcorns, id));
                                });
                                mainContainer().append(`</div>`);
                                // Hide movie list for initial start fadeIn
                                $("#loadingSection").fadeOut(2000);
                                $("#myGroup").hide();
                                $("#myGroup").fadeIn(2000);

                                $('#splashImage').attr("src", currentJumbotron);

                                function editLabel() {
                                    modalLabel = 'Edit Movie';
                                    console.log(modalLabel);
                                    movieCard = $(this).attr("id").split("-")[1];
                                    for (let movie of allMovies) {
                                        if (parseInt(movieCard) === movie.id) {
                                            selectedTitle = movie.title;
                                            selectedPopcorns = movie.popcorns;
                                        }
                                    }

                                    $('#modalLabel').html(modalLabel);
                                    $('.modalOne').html(`<form>
                            <div class="form-group">
                                <label for="titleInput" class="col-form-label">Title:</label>
                                <input type="text" class="form-control" id="titleInput">
                            </div>
                            <div class="form-group">
                                <label for="popcornsInput" class="col-form-label">Popcorns:</label>
                                <input type="text" class="form-control" id="popcornsInput">
                            </div>
                        </form>`);
                                    $('#saveInput').removeClass('btn-danger btn-success').addClass('btn-warning').html('Save Edit')
                                    // modalLabel().html('Edit Movie')
                                    $("#titleInput").val(selectedTitle);
                                    $("#popcornsInput").val(selectedPopcorns);
                                }

                                $(".edit-button").click(editLabel);

                                function deleteLabel() {
                                    modalLabel = 'Delete Movie';
                                    console.log(modalLabel);
                                    movieCard = $(this).attr("id").split("-")[1];
                                    console.log(movieCard);
                                    $('#modalLabel').html(modalLabel);
                                    // modalLabel().html('Edit Movie')
                                    $('.modalOne').html("Are you sure you want to delete this movie?");
                                    $('#saveInput').removeClass('btn-warning btn-success').addClass('btn-danger').html('Delete')
                                }

                                $(".delete-button").click(deleteLabel);
                            }, 2000);
                        })
                        .catch((error) => {
                            alert('There was an error.\nPlease check the console for more information.');
                            console.log(error);
                        });
                };

                renderList();

                $('#addButton').click(() => {
                    $('#modalLabel').html('Add Movie');
                    $('.modalOne').html(`<form>
                            <div class="form-group">
                                <label for="titleInput" class="col-form-label">Title:</label>
                                <input type="text" class="form-control" id="titleInput">
                            </div>
                            <div class="form-group">
                                <label for="popcornsInput" class="col-form-label">Popcorns:</label>
                                <input type="text" class="form-control" id="popcornsInput">
                            </div>
                        </form>`);
                    $('#saveInput').removeClass('btn-warning btn-danger').addClass('btn-success').html('Post Movie');

                });