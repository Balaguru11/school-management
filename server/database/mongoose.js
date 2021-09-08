const mongoose = require('mongoose')

const User = require('../models/adminmodel')


module.exports = mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log(err);
});