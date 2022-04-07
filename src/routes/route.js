const express = require('express');

const loggerModule = require('../logger/logger')
const helpermodule = require('../util/helper')
const formatterModule = require('../validator/formatter')
const lodash = require('lodash')
const router = express.Router();

router.get('/test-me', function(req, res) {
    loggerModule.welcome()
    helpermodule.printTodaysDate()
    helpermodule.printCurrentMonth()
    helpermodule.getBatchInformation()
    formatterModule.trimString()
    formatterModule.u()
    formatterModule.m()


    res.send('My first ever api!')
});


//problem 1

router.get('/hello', function(req, res) {
    let months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'aug', 'sep', 'oct', 'nov', 'dec']
    let subarray = lodash.chunk(months, 3)
    console.log(subarray)

    //problem 2


    let oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log('Last 9 odd number:', lodash.tail(oddNumber))

    //problem 3
    let a = [1, 2, 1, 4]
    let b = [2, 4, 5, 6]
    let c = [6, 2, 4, 13]
    let d = [4, 2, 4, 2]
    let e = [1, 3, 2, 4, 2, ]
    console.log(' unique array:', lodash.union(a, b, c, d, e))

    //problem 4

    let arrayofKeyValuePairs = [
        ["horror", "The Shining"],
        ["drama", "Titan"],
        ["thriller", "Shutter"],
        ["fantasy", "pan Labyinth"]
    ]
    console.log(lodash.fromPairs(arrayofKeyValuePairs))
    res.send('hello my api!')

});
// adding this comment for no reason