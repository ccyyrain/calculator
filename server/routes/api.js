var express = require('express');
var router = express.Router();

/* GET example. */
router.get('/example', function(req, res, next) {
  var foo = {
    message: 'hello from express!'
  }
  console.log();
  res.send(foo);
});

var movies = require('../data/movies.json')
/*GET all movies as JSON */
router.get('/movies', function(req, res, next) {
  res.send(movies);
});

// allow easy lookup by id
var moviesById = {}
movies.movieList.map(function(movie) {
  moviesById[movie.movieId] = movie
})

/* GET a movie by id */
router.get('/movies/:id', function(req, res, next) {
  var movie = moviesById[req.params.id]
  if (movie) {
    res.send(movie)
  } else {
    res.status(404).send('movie id %d not found', req.params.id);
  }

});

module.exports = router;
