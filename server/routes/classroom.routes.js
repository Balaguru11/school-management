const express = require('express');
const Classrouter = express.Router();

const {addClass} = require('../validator/classValidator')

Classrouter.post('/add-class', addClass)




module.exports = Classrouter;