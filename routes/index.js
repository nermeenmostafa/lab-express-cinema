const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    console.log(Movie);
    Movie.find()
        .then((movie) => {
            res.render("movies", { movie })
})
    .catch((err) => {
        console.log(err)
    })
})
router.get("/movies/:id", (req,res,next)=>{
    Movie.findById(req.params.id)
    .then((movie)=>{
        console.log(movie)
        res.render('movie-detail',movie)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;
