const { range } = require("express/lib/request")
const BookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function(req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function(req, res) {
    let bookInyear = await BookModel.find({ year: "2021" })
    res.send({ msg: bookInyear })
}


const getXINRBooks = async function(req, res) {
    let bookByPrice = await BookModel.find({ price: { $in: ["100INR", "200INR", "300INR"] } })
    res.send({ msg: bookByPrice })

}
const getRandomBooks = async function(req, res) {
    let randomBooks = await BookModel.find({ $or: [{ stockAvailable: "true" }, { totalPages: { $gt: 500 } }] })

    res.send({ msg: randomBooks })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks