const JWT = require('jsonwebtoken')
const User = require('../models/adminmodel')

exports.isAuth = async(req, res, next) => {

    // usng cookie, we will check the user is authenticated or not.
    // check cookie is valid or not

    const isValid = await verifyToken(req)

    // if toekn is invalid
    if(!isValid){
        return res.status(401).json({success: false, error: "User is not found. Please try Signup / Signin."})
    }

    req.user = isValid;
    // const {firstname, lastname, email, role} = isValid;
    // res.json({success: true, user: {firstname, lastname, email, role}});
    next();

}


const verifyToken = async (req) => {
    if(!req.cookies.auth_token){
        return false;
    }

    // if the cookie is present and it is auth_token, we need to check if the token is valid or not using JWT
    const decode = JWT.verify(req.cookies.auth_token, `${process.env.JWT_SECRET}`);
    // If the auth token is valid, we will get the user_id from user.js controller
    const user = await User.findOne({_id: decode._id})

    if(!user){
        return false;
    }

    return user;
}