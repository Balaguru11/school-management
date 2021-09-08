const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Creating Admin Model

const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        minlength: 4
    },
    mail:{
        type: String,
        trim: true
    },
    username:{
        type:String,
        trim: true,
        minlength: 2
    },
    password:{
        type: String,
        minlength: 4,
    }
})


AdminSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next()
    }

    bcrypt.hash(this.password, 12, (err, hashedPassword) => {
        if(err){
            return next(err);
        }else{
        this.password = hashedPassword;
        next();
        }
    });
})


// compare password

AdminSchema.methods.comparePassword = function(password){
    if(password){
        return bcrypt.compare(password, this.password);
    }

    return false;
}

module.exports = mongoose.model('User', AdminSchema)