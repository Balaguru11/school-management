const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    st_name:{
        type: String,
        trim: true,
        minlength: 4
    },
    st_contact: {
        type: Number,
        trim: true,
        minlength: 10
    }, 
    st_class: {
        type: String,
        trim: true,
        minlength: 2
    }
})

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel