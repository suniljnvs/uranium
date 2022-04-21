const mongoose = require('mongoose');
const moment = require('moment');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    amount: Number,
    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    isFreeAppUser: Boolean,
    date: {
        type: String,
        default: moment().format('DD/MM/YYYY')
    }


}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);