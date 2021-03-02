"use strict";


const URL = "https://coconut-denim-leather.glitch.me/movies"

$("main").html(`<div id="loader-container"><img class="loaderImage" src="img/????????.gif"></div>`);
// menu
const addMenuToggle = () => {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    })
};
addMenuToggle();
//GET STUFF
const getMovies = fetch(`${URL}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    return data
    });


const getAMovie = fetch(`${URL}`)
    .then(response => response.json())

//CREATE STUFF
const addMovie = (movie) => fetch(`${URL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(response => response.json())
    .then(data => {
        console.log(`${JSON.stringify(data)} has been created`);
        return data.id;
    })
    .catch(console.error);

//EDIT
const editMovie = movie => fetch(`${URL}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
})
    .then(response => response.json())
    .then(data => {
        console.log(`${JSON.stringify(data)} has been edited`);
    })
    .catch(console.error);

//DELETE
const deleteMovie = id => fetch(`${URL}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(() => {
        console.log("deleted successfully");
    })
    .catch(console.error);

let modalLabel = '';
let movieCard;
let allMovies = [];
// SELECTED EDITABLE MOVIE
let selectedTitle = '';
let selectedPopcorns;

const buildMovieHtml = (title, popcorns, id) => {
    let content = `<div class="card">`;
    content += `<div class="card-header" id="heading${id}">`;
    content += `<h5 class="mb-0">`
    content += `${title} - Popcorns: ${popcorns}`
    content += `</h5>`;
    content += `</div>`;
    content += `<div id="collapse${id}" class="" aria-labelledby="heading${id}" data-parent="#myGroup">`;
    content += `<div class="movie-content-container card-body">`;
    content += `<div class="movie-description">
             I don't 'need' to drink. I can quit anytime I want! Do a flip! Wow! A superpowers drug you can just rub onto your skin? You'd think it would be 
             something you'd have to freebase. Moving along… Now Fry, it's been a few years since medical school, so remind me. Disemboweling in your species: 
             fatal or non-fatal?
</div>`;
    content += `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_${id}">
    Edit
</button>`;
    content += `<button type="button" id="deleteButton-${id}" class="delete-button btn btn-danger btn-sm" data-toggle="modal" data-target="#modal">
                    Delete
                </button>`;
    content += `</div>`;
    content += `</div>`;
    content += `</div>`;
    content += generateModal(id, title)

    return content
};

function generateModal(id, movieTitle) {

    return `<div class="modal fade" id="Modal_${id}" tabindex="-1" aria-labelledby="ModalLabel_${id}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ModalLabel_${id}">Edit ${movieTitle}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>`


}

const renderMovieList = () => {
    getMovies
        .then((movieList) => {
            movieList.forEach(({title, popcorns, id}) => {
                console.log(title)
                $("#accordion").append(buildMovieHtml(title, popcorns, id));
            });
            // $("#loadingSection").fadeOut(2000);
            // $("#myGroup").hide();
            // $("#myGroup").fadeIn(2000);
            // $('#splashImage').attr("src", currentJumbotron);
            allMovies = movieList;
            function editLabel() {
                modalLabel = 'Edit Movie';
                console.log(modalLabel);
                movieCard = $(this).attr("data-value");
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
                $("#titleInput").val(selectedTitle);
                $("#popcornsInput").val(selectedPopcorns);
            }


            //TODO: make the modal appear (ensure editButton is bound to modal)
            //TODO: pass the data from the modal back to js
            //TODO: update the record using editMovie
            //TODO: after record updated, need to clear movies on page then, use getMovies to put movies back on page

            $(".edit-button").click(editLabel);
            // function deleteLabel() {
            //     modalLabel = 'Delete Movie';
            //     console.log(modalLabel);
            //     movieCard = $(this).attr("id").split("-")[1];
            //     console.log(movieCard);
            //     $('#modalLabel').html(modalLabel);
            //     $('.modalOne').html("Are you sure you want to delete this movie?");
            //     $('#saveInput').removeClass('btn-warning btn-success').addClass('btn-danger').html('Delete')
            // }
            // $(".delete-button").click(deleteLabel);
        })
        .catch((error) => {
            alert('There was an error.\nPlease check the console for more information.');
            console.log(error);
        });
};
renderMovieList();

// $('#addButton').click(() => {
//     console.log$("#title");
// $('#modalLabel').html('Add Movie');
// $('.modalOne').html(`<form>
//                     <div class="form-group">
//                         <label for="titleInput" class="col-form-label">Title:</label>
//                         <input type="text" class="form-control" id="titleInput">
//                     </div>
//                     <div class="form-group">
//                         <label for="popcornsInput" class="col-form-label">Popcorns:</label>
//                         <input type="text" class="form-control" id="popcornsInput">
//                     </div>
//                 </form>`);
// $('#saveInput').removeClass('btn-warning btn-danger').addClass('btn-success').html('Post Movie');
//})