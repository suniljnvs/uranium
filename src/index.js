const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://sunil-1998:xUgDvP9q5zTG5ZBT@cluster0.7uvij.mongodb.net/sunil1998", {
    useNewUrlParser: true

})

.then(() => console.log("mongo DB is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});