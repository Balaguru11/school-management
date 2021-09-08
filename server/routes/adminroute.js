const express = require('express');
const Adminrouter = express.Router();

const { adminValidationResult, adminValidator} = require('../validator/adminvalidator')
const { adminRegister, adminLogin, adminLogout, createStaff} = require('../controllers/admincontroller')
const { isAuth } = require('../middlewares/auth')

Adminrouter.post('/register', adminValidator, adminValidationResult, adminRegister);
Adminrouter.post('/login', adminLogin);
Adminrouter.get('/logout', adminLogout);


Adminrouter.post('/add-staff', adminLogin, createStaff)

Adminrouter.get('/secret', isAuth, (req, res) => {

    return res.json({success: true, message: "You are now logged in to the secret page."});
});


module.exports = Adminrouter
