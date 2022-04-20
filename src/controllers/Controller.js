const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")
const mongoose = require('mongoose');

const createDeveloper = async function(req, res) {
    let data = req.body
    let saveData = await developerModel.create(data)
    res.send({ data: saveData });
}

const createBatch = async function(req, res) {
    let data = req.body;
    let saveData = await batchModel.create(data);
    res.send({ msg: saveData });
}

const listAllBatch = async function(req, res) {
    let getData = await batchModel.find().populate('developer');
    res.send({ msg: getData })
}

const listAllDeveloper = async function(req, res) {
    let schoolarshipDeveloper = await developerModel.find({ gender: { $in: ['Female'] }, percentage: { $gte: 70 } })

    res.send({ msg: schoolarshipDeveloper })
}

const getDeveloper = async function(req, res) {
    let data1 = req.query.percentage
    let data2 = req.query.program
    console.log(data2);
    let getList = await developerModel.find({ percentage: { $gte: data1 }, "batchName": data2 }).populate("developer")
    console.log(getList);
    res.send({ msg: getList })

}



module.exports.createDeveloper = createDeveloper
module.exports.createBatch = createBatch
module.exports.listAllBatch = listAllBatch
module.exports.listAllDeveloper = listAllDeveloper
module.exports.getDeveloper = getDeveloper