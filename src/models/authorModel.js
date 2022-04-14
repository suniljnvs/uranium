const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    authorName: String,
    author_id: {
        type: Number,
        required: true
    },
    age: Number,
    isPublished: Boolean,
    year: Number,


    sales: { type: Number, default: 20 }
}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema) //author