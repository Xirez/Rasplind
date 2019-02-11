const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

let Movie = module.exports = mongoose.model('movie', movieSchema);

module.exports.get = function (callback, limit) {
    Movie.find(callback).limit(limit);
}