const { check, validationResult } = require('express-validator')

exports.adminValidator = [
    check('username').trim().not().isEmpty().withMessage('Username should be entered').isLength({min: 4, max: 20}).withMessage('Username must be at least 4 characters long'),
    check('name').trim().not().isEmpty().withMessage('Name is required').isLength({min: 4, max: 20}).withMessage('Name must be at least 4 characters long'),
    check('mail').trim().not().isEmpty().withMessage('Email is required').isEmail().withMessage('Please enter valid email'),
    check('password').trim().not().isEmpty().withMessage('Password is required').isLength({min: 7}).withMessage('Password must be at least 7 characters long.')

];

exports.adminValidationResult = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = errors.array()[0].msg;
        return res.status(200).json({success: false, error: error});
        // return error;
       
    }

    next();
}