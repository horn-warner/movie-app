"use strict";

$(document).ready(function() {
    const URL = "https://coconut-denim-leather.glitch.me/movies"
    let title = $("#title");
    let popcorns = $("#popcorns");
})

//TEST IN CONSOLE
    const getMovies = fetch("https://coconut-denim-leather.glitch.me/movies")
        .then(response => console.log(response.json()));
// menu 
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

    //Print JSON data to header
    // $("#button").click(function (getMovies) {
    //     $(this).text(getMovies).val()
    // });
{
    //Create - allow the user to add movie title and their rating
    //$("#user-movie-button").click
    //text from title text input and time-to-watch input(popcorn)

}

{
    //Read
}

{
    //Update
}

{
    //Delete
}
/* On page load:

Display a "loading..." message Make an AJAX request to get a listing of all the movies When the initial AJAX request comes back,
remove the "loading..." message and replace it with HTML generated from the json response your code receives.

Allow users to add new movies
Create a form for adding a new movie that has fields for the movie's title and rating When the form is submitted,
the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

Allow users to edit existing movies
Give users the option to edit an existing movie. A form should be pre-populated with the selected movie's details Like creating a movie,
this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

Delete movies
Each movie should have a "delete" button When this button is clicked, your javascript should send a DELETE request

Bonuses
Add a disabled attribute to buttons while their corresponding ajax request is still pending.
Show a loading animation instead of just text that says "loading...".
Use modals for the creating and editing movie forms.
Add a genre property to every movie.
Allow users to sort the movies by rating, title, or genre (if you have it).
Allow users to search through the movies by rating, title, or genre (if you have it).
Use a free movie API like OMDB to include extra info or render movie posters.

Helpful Hints:
The id property of every movie should not be edited by hand. The purpose of this property is to uniquely identify that particular movie.
That is, if we want to delete or modify an existing movie, we can specify what movie we want to change by referencing it's id.
When a new movie is created (i.e. when you send a POST request to /movies with a title and a rating), the server will respond with the movie object that was created,
including a generated id. Take a look at the other branches in this repository, as they have configuration/setup for common scenarios,
such as including bootstrap in your application.*/

/*
Casey Edwards  12:21
@channel Helpful structural concepts here:
To create this application, you need to
-Not worry about the visual aspect until your code itself is fleshed out!
-Create the CRUD functions (and make sure each thing you type works before adding another piece)
(console.log)
-Call the CRUD functions
(console.log)
-Use some jQuery/DOM to add and remove things from the screen
(console.log)
-Create a form to allow the user to search!
(console.log)
-Use some jQuery/DOM to allow the user to search
(console.log)
-STYLE IT last
(console.log)
And whenever something goes wrong (it will)
(console.log)
(make sure you're using the methods like fetch, etc as is shown in documentation)
(console.log)
If THAT doesn't work, try this:
 -Isolate what exactly isn't working (the specific function)
 -Find the point in that code where things do work
 -SLOWLY, CAREFULLY add code back in, console logging with each small step until things break
 -When you find that breaking point, and each single piece before it worked -> that's probably where the issue is <-
 -Ask yourself if you called the method appropriately. Passed in the correct data type, returned the correct data type, called it in the correct place, etc.
 -If not, check the documentation, curriculum, and lecture notes. Chances are, you may have missed some smol detail!
I'm a firm believer that complicated things can be accomplished if they are broken into easy tasks and we take a methodical approach to making sure each tiny piece works before moving on!
SAVE THIS. PUT IT SOMEWHERE AND CONSTANTLY LOOK BACK AT IT WHEN YOU GET STUCK
 */