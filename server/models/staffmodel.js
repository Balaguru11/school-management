const mongoose = require('mongoose');

// Creating Staff Model

const StaffSchema = new mongoose.Schema({
staffname:{
    type: String,
    trim: true,
    minlength: 4
},
staffemail:{
    type: String,
    trim: true
},
staffcontact:{
    type: Number,
    minlength: 10,
    trim: true
},
stafftopic:{
    type: String,
    minlength: 4,
    trim: true
},
classteacher:{
    type:String,
    trim: true,
    minlength: 2
}

})

const Staff = mongoose.model('Staff', StaffSchema)

module.exports = Staff