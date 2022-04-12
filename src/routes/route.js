/*const express = require("express");

const router = express.Router();

let players = [{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post("/players", function(req, res) {

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.body.name) {
            return res.send("Player already exist")

        }
    }
    let user = req.body;

    players.push(user);
    console.log(players);

    res.send({ data: players, status: true });
});

module.exports = router; */

const express = require("express");
const router = express.Router();
const BookModel = require("../models/bookModel")
const BookController = require("../controllers/bookcontroller")

router.get("/test-me", function(req, res) {
    res.send("my first ever api!")
})

router.post("/createBook", BookController.createBook)
router.get("/getBookData", BookController.grtBookData)

module.exports = router;