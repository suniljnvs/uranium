const express = require('express');

const Controller = require("../controllers/Controller");
const middleWare = require("../middlewares/commonMiddlewares");

const router = express.Router();


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post('/newProduct', Controller.newProduct)
router.post("/newOrder", middleWare.headerValidator, Controller.newOrder)

router.post('/newUser', middleWare.headerValidator, Controller.newUser)


module.exports = router;