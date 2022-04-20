const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const batchSchema = new mongoose.Schema({

    batchName: String,
    size: Number,
    developer: {
        type: ObjectId,
        ref: "Developer"
    },
    program: {
        type: String,
        enum: ['Backend', 'Frontend']

    },
}, { timestamps: true });

module.exports = mongoose.model('Batch', batchSchema)