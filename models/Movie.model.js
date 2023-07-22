const mongoose = require("mongoose")
const movieschema = new mongoose.Schema(

    {
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        stars: [{
            type: String

        }],
        image: {
            type: String
        },
        description: {
            type: String,
            required: true
        },
        showtimes: {
            type: [String],
            required: true
        }
    },


)
const Movie = mongoose.model("movie", movieschema);

module.exports = Movie;