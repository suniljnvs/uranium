const { name } = require("../util/helper")

let trim = function() {
    console.log('  function  '.trim())
}

let Uppercase = function() {

    console.log('sunilKumar'.toUpperCase())
}


let aj = function() {

    console.log(' SuNILkUmar'.toLowerCase())
}

module.exports.trimString = trim
module.exports.u = Uppercase
module.exports.m = aj