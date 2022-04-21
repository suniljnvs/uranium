const ProductModel = require("../models/productModel");
//const OrderModel = require("../models/orderModel");
const UserModel = require("../models/userModel");
const OderModel = require("../models/oderModel");


const newProduct = async function(req, res) {
    let data = req.body;
    let newData = await ProductModel.create(data);
    res.send({ msg: newData });
}

const newUser = async function(req, res) {
    let data = req.body;
    data['isFreeAppUser'] = req.headers.isfreeappuser;

    let newData = await UserModel.create(data);
    res.send({ msg: newData });
}



const newOrder = async function(req, res) {
    let data = req.body;
    let user = await UserModel.findById(data.userId);
    if (user) {
        let product = await ProductModel.findById(data.productId);
        if (product) {
            if (req.headers.isfreeappuser == 'true') {
                data['amount'] = 0;
                data['isFreeAppUser'] = req.headers.isfreeappuser;
                let newData = await OrderModel.create(data);
                res.send({ msg: newData });

            } else {

                if (user.balence >= product.price) {
                    await UserModel.findOneAndUpdate({
                        _id: data.userId
                    }, {
                        $set: { balance: user.balance - product.price }
                    });

                    data['amount'] = product.price;
                    data['isFreeAppUser'] = req.headers.isfreeappuser;
                    let newData = await OrderModel.create(data);
                    res.send({ msg: newData });

                } else {
                    res.send("Insufficient Balence !")
                }
            }

        } else {
            res.send('Invalid ProductID!');
        }

    } else {
        res.send('Invalid UserID!');
    }
}



module.exports.newOrder = newOrder
module.exports.newProduct = newProduct
module.exports.newUser = newUser