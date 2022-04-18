const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require('mongoose');
const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

//const ObjectId = mongoose.Types.ObjectId

const createAuthor = async function(req, res) {
    let data = req.body;
    let saveData = await authorModel.create(data);
    res.send({ msg: saveData });
}

const createPublisher = async function(req, res) {
    let data = req.body;
    let saveData = await publisherModel.create(data);
    res.send({ msg: saveData });
}

const createBook = async function(req, res) {
    let data = req.body;
    if (!data.author_id || !data.publisher_id)
        res.send({ msg: "Author ID/publisher ID is required" })
    else if (!ObjectId.isValid(data.author_id) || !ObjectId.isValid(data.publisher_id))
        res.send({ msg: "The Author/Publisher is not present" })
    else {
        let saveData = await bookModel.create(data);
        res.send({ msg: saveData });
    }
}

const listAllBooks = async function(req, res) {
    let getData = await (await bookModel.find().populate('author_id publisher_id'));
    res.send({ msg: getData })
}

const updateBooks = async function(req, res) {
    let publisher_id = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select("_id");
    let updateData;
    for (let i = 0; i < publisher_id.length; i++) {
        updateData = await bookModel.updateMany({ publisher: publisher_id[i]._id }, { $set: { isHardCover: true } })
    }
    let author_id = await authorModel.find({ rating: { $gt: 3.5 } }).select("_id")
    let updateData1;
    for (let i = 0; i < author_id.length; i++) {
        updateData1 = await bookModel.updateMany({ author: author_id[i]._id }, { $inc: { price: 10 } })
    }
    res.send({ msg1: updateData, msg2: updateData1 })
}

module.exports.listAllBooks = listAllBooks;
module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.createPublisher = createPublisher;
module.exports.updateBooks = updateBooks;