const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    bookname: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,

    publisher_id: {
        type: ObjectId,
        ref: "newPublisher"
    },
    isHardCover: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema)