const express = require('express');
const Loginrouter = express.Router();
const bcrypt = require('bcryptjs');

const AdminModel = require('../models/adminmodel')
const StaffModel = require('../models/staffmodel')
const StudentModel = require('../models/studentmodel')

Loginrouter.get('/admin', (req, res) => {

    // // Form validation
    // const { errors, isValid } = validateLoginInput(req.body);

    // //Check Validation
    // if(!isValid){
    //     return res.status(400).json(errors);
    // }

    // const username = req.body.username;
    // const password = req.body.password;

    // // Find Admin by Username
    // AdminModel.findOne({ username }).then(admin => {
    //     //Check if admin exists
    //     if(!admin){
    //         return res.status(404).json({usernamenotfound: "Username not found"});
    //     }

    //     //Check Password
    //     bcrypt.compare(password, admin.password).then(isMatch => {
    //         if(isMatch){
    //             //User Matched
    //             // Create JWT Payload
    //             const payload = {
    //                 id:  user.id,
    //                 name: user.name
    //             };

    //             //Sign token
    //             jwt.sign(payload, keys.secretOrKey,{
    //                 expiresIn: 315556926 // 1 Year in seconds
    //             }, (err, token) => {
    //                 res.json({success: true, token: "Bearer " + token});
    //             });
    //         }else{
    //             return res.status(400).json({passwordincorrect: "Password Incorrect."})
    //         };
    //     });
    // });


    var password = req.body.password
    
        if (bcrypt.compareSync(password, hash)) {
            AdminModel.findOne({username:req.body.username, password:password}, (err, documents)=>{
                if(err){
                    res.send("Something went wrong at Login.");
                }else{
                    if(documents.length == 0){
                        res.send("Srry. Username / Password Mismatch.");
                    }else{
                        res.send(`Welcome ${username}`);
                        return res.redirect('/admin-dashboard');
                    }
                }
        })
    }
});

Loginrouter.get('/staff', (req, res) => {
    StaffModel.find({staffname:req.body.username, staffcontact:req.body.password}, (err, documents)=>{
        if(err){
            res.send("Something went wrong at Login.");
        }else{
            if(documents.length == 0){
                res.send("Srry. Username / Password Mismatch.")
            }else{
                res.send(`Welcome ${staffname}`);
            }
        }
    })
})

Loginrouter.get('/student', (req, res) => {
    StudentModel.find({st_name:req.body.username, st_contact:req.body.password}, (err, documents)=>{
        if(err){
            res.send("Something went wrong at Login.");
        }else{
            if(documents.length == 0){
                res.send("Srry. Username / Password Mismatch.")
            }else{
                res.send(`Welcome ${st_name}`);
            }
        }
    })
})


Loginrouter.get('/login/staffvalidate', (req, res) => {
    StudentModel.find({st_name:req.body.username, st_contact:req.body.password}, (err, documents)=>{
        if(err){
            res.send("Something went wrong at Login.");
        }else{
            if(documents.length == 0){
                res.send("Srry. Username / Password Mismatch.")
            }else{
                res.send(`Welcome ${st_name}`);
            }
        }
    })
})






module.exports = Loginrouter