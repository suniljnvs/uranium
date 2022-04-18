const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({

    name: String,
    rating: Number,

    headQuarter: String,


}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)