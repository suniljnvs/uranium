const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    userName: String,
    balence: {
        type: Number,
        default: 100
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)