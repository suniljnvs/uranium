let printDate = function() {
    let currentDate = new Date()

    console.log(currentDate)
}


let printMonth = function() {
    let currentDate = new Date()

    console.log(currentDate.getMonth() + 1)
}


let getBatchInfo = function() {

    console.log('Uranium ,Batch is W3D1 ,The today Topic is Nodejs module system', )
}


module.exports.printTodaysDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.getBatchInformation = getBatchInfo