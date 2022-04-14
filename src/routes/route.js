const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", BookController.createAuthor)
router.post("/createBooks", BookController.createBooks)

router.get("/allBooks", BookController.allBooks)
router.get("/updateBookPrice", BookController.updateBookPrice)
router.get("/authorsName", BookController.authorsName)

module.exports = router;