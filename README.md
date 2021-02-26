
Movies Application
For this project, we will be building a single page movie application (SPA). It will allow users to add, edit, and delete movies, as well as rate them. We will be using json-server to mock a database and our backend, so that we can just worry about the front end and AJAX requests.

json-server is configured to have a delay of 1.2 seconds, so you can see what your application might actually look like, instead of serving instantaneous reponses. You can modify this behavior by changing (or removing) the number after the -d flag inside of the npm dev script.

Setup
Remix this project to your own glitch account.
Create a Github organization and create a repository to put your code in there.
Use your own remixed URL to fetch results inside of your project to perform RESTful API requests, it should look like: https://your-random-url.glitch.me/movies.
Keep it in mind that the json-server doesn't update in real-time the db.json file, but it does respond with the latest information. Always rely on the endpoint that looks like this https://codeup-json-server.glitch.me/movies
Specification
Your application should:

On page load:

Display a "loading..." message
Make an AJAX request to get a listing of all the movies
When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
Allow users to add new movies

Create a form for adding a new movie that has fields for the movie's title and rating
When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
Allow users to edit existing movies

Give users the option to edit an existing movie
A form should be pre-populated with the selected movie's details
Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.
Delete movies

Each movie should have a "delete" button
When this button is clicked, your javascript should send a DELETE request
Bonuses
Add a disabled attribute to buttons while their corresponding ajax request is still pending.
Show a loading animation instead of just text that says "loading...".
Use modals for the creating and editing movie forms.
Add a genre property to every movie.
Allow users to sort the movies by rating, title, or genre (if you have it).
Allow users to search through the movies by rating, title, or genre (if you have it).
Use a free movie API like OMDB to include extra info or render movie posters.
Helpful Hints
The id property of every movie should not be edited by hand. The purpose of this property is to uniquely identify that particular movie. That is, if we want to delete or modify an existing movie, we can specify what movie we want to change by referencing it's id. When a new movie is created (i.e. when you send a POST request to /movies with a title and a rating), the server will respond with the movie object that was created, including a generated id.
Take a look at the other branches in this repository, as they have configuration/setup for common scenarios, such as including bootstrap in your application.