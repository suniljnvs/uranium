const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")


router.get("/test-me1", function(req, res) {
    res.send("My first ever api!")
})

router.get("/test-me2", function(req, res) {
    res.send("My first ever api!")
})

router.get("/test-me3", function(req, res) {
    res.send("My first ever api!")
})

router.get("/test-me4", function(req, res) {
    res.send("My first ever api!")
})
module.exports = router;