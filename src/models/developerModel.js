const mongoose = require('mongoose');


const developerSchema = new mongoose.Schema({
    name: String,

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    percentage: Number,

}, { timestamps: true });


module.exports = mongoose.model('Developer', developerSchema)