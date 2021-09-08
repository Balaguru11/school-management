const express = require('express');
const app = express()
const Router = express.Router();

const StudentModel = require('../models/studentmodel');

Router.get('/', (req, res)=>{

    StudentModel.find({}, (err, document)=>{
        if(err){
            res.send(err);
        }else{
            res.send(document);
        }
    })
})

//Addstudent.js
Router.post('/add', (req, res)=>{
    
    var newstudent = new StudentModel ({st_name:req.body.st_name, st_contact:req.body.st_contact, st_class:req.body.st_class})

    newstudent.save((err)=>{
        if(err){
            res.send("Error in Adding New Student");
        }else{
            res.send("Student added Successfully.")
        }
    })
})


//find and edit student by id
Router.patch('/edit/:id', (req, res)=>{
    
    StudentModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, document) => {
        if(err){
            res.send(err);
        }else{
            res.json(document);
            res.send("Student edited successfully.");
        }
    })

})



//Delete Student by ID
Router.delete('/delete/:id', (req, res)=>{

    StudentModel.findByIdAndDelete(req.params.id, {$set:req.body}, (err, document)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Student deleted successfully.");
        }
    })


})
module.exports = Router