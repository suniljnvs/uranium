const express = require("express")
const router = express.Router();

//const { route } = require('express/lib/application');

const Controller = require("../controllers/Controller")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", Controller.createAuthor)

router.post("/createPublisher", Controller.createPublisher)

router.post("/createBook", Controller.createBook)

router.get("/listAllBooks", Controller.listAllBooks)
router.put("/updateBooks", Controller.updateBooks)


module.exports = router;