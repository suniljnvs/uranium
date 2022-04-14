const authorModel = require("console");
const bookModel = require("../models/bookModel");


const createAuthor = async function(req, res) {
    let data = req.body;

    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}


const createBooks = async function(req, res) {
    let book = req.body;

    let savedBook = await bookModel.create(book)
    res.send({ msg: savedBook })
}

const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({ autherName: "Chetan Bhagat" })
    const id = authorDetails[0].author_id
    const bookName = await bookModel.find({ author_id: id }).select({ name: 1 })
    res.send({ msg: bookName })
}

const updateBookPrice = async function(req, res) {
    const bookDetails = await bookModel.find({ bookName: "Two states" })
    const authorN = await authorModel.find({ author_id: id }).select({ authorName: 1, _id: 0 })
    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({ name: bkName }, { praice: 400 }, { new: true }).select({ price: 1, _id: 0 })
    res.send({ msg: authorN, updatedPrice })

}

const authorsName = async function(req, res) {
    const booksId = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    const id = booksId.map(inp => inp.author_id)

    let temp = []
    for (let i = 0; i < id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({ author_id: x }).select({ authorName: 1, _id: 0 })
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({ msg: authorName })
}


module.exports.createAuthor = createAuthor
module.exports.createBooks = createBooks
module.exports.allBooks = allBooks
module.exports.updateBookPrice = updateBookPrice
module.exports.authorsName = authorsName

//msg: booksName




// let allBooks= await BookModel.find( ).count() // COUNT

// let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND

// let allBooks= await BookModel.find( { 
//     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
// } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

// let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

// PAGINATION 
// let page= req.query.page
// let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

// let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


// let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 

// let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
// sales : { $in: [10, 17, 82] }

// let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

//  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
//  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


//  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
//  let allBooks= await BookModel.findOne( {sales: 10}) 
//  let allBooks= await BookModel.find( {sales: 10}) 



// //  update (not covered: - findByIdAndUpdate | updateOne )
// let allBooks= await BookModel.update(   
//     {  sales: {$gt: 10}  }, //condition
//     { $set: { isPublished: true} } // the change that you want to make
//     ) 



// REGEX
// let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
// let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
// let allBooks= await BookModel.find( { bookName:  /5$/  }) 
// let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

// ASYNC AWAIT

//let a = 2 + 4
//a = a + 10 console.log(a) let allBooks = await BookModel.find() //normally this is an asynchronous call..but await makes it synchronous


// WHEN AWAIT IS USED: - database + axios
//  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//console.log(allBooks) let b = 14
//b = b + 10 console.log(b) res.send({ msg: allBooks })