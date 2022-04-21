const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Nil05:RTFSM7DZfy6AZPkA@cluster0.ixogq.mongodb.net/Nil", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

const moment = require('moment');
let time = moment();

app.use(function(req, res, next) {
    let url = req.originalUrl
    console.log(url)
    let ip = req.ip
    console.log(ip)
    console.log(time.format('HH:MM:SS'));
    console.log(time.format('YYYY/MM/SS'));

    next()
})

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});