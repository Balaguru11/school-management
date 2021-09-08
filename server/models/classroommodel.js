const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({

    
    std:{
        type: String,
        trim: true,
        minlength: 2,
        required: true

    },
    classcapacity:{
        type: Number,
        trim: true,
        minlength: 2,
        required: true
    },
    topic1:{
        type: String,
        trim: true,
        required: true
    },
    topic2:{
        type: String,
        trim: true,
        required: true
    },
    topic3:{
        type: String,
        trim: true,
        required: true
    },
    topic4:{
        type: String,
        trim: true,
        required: true
    },
    topic5:{
        type: String,
        trim: true,
        required: true
    }

})

const Classroom = mongoose.model('Classroom', ClassroomSchema)

module.exports = Classroom