const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const { default: mongoose } = require('mongoose');
const moment = require('moment')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Nil05:RTFSM7DZfy6AZPkA@cluster0.ixogq.mongodb.net/Nil", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function(req, res, next) {
        let data = moment().format("YYYY-MM-DD  HH:MM:SS")
        console.log(data + "," + req.ip + "," + req.url)
        next()
    }

);

app.use('/', route);



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});