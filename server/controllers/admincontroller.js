const User = require('../models/adminmodel')
const Staff = require('../models/staffmodel')
//const Classroom = require('../models/classroommodel')

const JWT = require('jsonwebtoken');

// Cookie Generate using JWT

const signToken = userId => {
    return JWT.sign({_id: userId}, `${process.env.JWT_SECRET}`);
}

// signup user route
exports.adminRegister = async(req, res) => {
    try{
        const user = await User.findOne({mail: req.body.mail})
        if(user){
            return res.status(400).json({success: false, error: 'This email is already in use. Please signin.'})
        }

        const newUser = new User(req.body);
        const {name, mail, username} = newUser
        await newUser.save()

        //cookie to keep the user logged in after signup.
        //let userId = req.params._id;
        const token = signToken(newUser._id);
        res.cookie('auth_token', token, { httpOnly: true });

        res.json({success: true, user: {name, mail, username}});
    }catch(error){
        res.status(500).json({success: false, error: "catch error at sgnup controller" });
    }
}


//signin user route
exports.adminLogin = async(req, res) => {
    
    //destruct the login details
    const { mail, password } = req.body;

    // since we are using async and await, we should use error handling. So, for that to take effect, try adn catch method used here.
    try{
        

        const user = await User.findOne({ mail });

        if(!user){
            return res.status(401).json({success: false, error: "No user found. Please signup."});
        }

        // If user, we need to compare the password
        const isMatch = await user.comparePassword(req.body.password);
        if(!isMatch){
            return res.status(401).json({success: false, error: "Email / Password doesnot match."});
        }

        const token = signToken(user._id);
        res.cookie('auth_token', token, { httpOnly: true, });

        const {name, mail, username} = user;
        res.json({success: true, user: {name, mail, username}});
        
    }catch(error){
        console.log(error);
        res.status(500).json({success: false, error: 'Some Catch Error occoured.'});
    }
};


exports.adminLogout = (req, res) => {
    res.clearCookie('auth_token');
    res.json({success: true});
};

//CRUD classroom

// Adminrouter.post('/add-class', (req, res) => {

//     var createclass = new Classroom({std:req.body.std, classcapacity:req.body.classcapacity, topic1:req.body.topic1, topic2:req.body.topic2, topic3:req.body.topic3, topic4:req.body.topic4, topic5:req.body.topic5})

//     createclass.save((err) => {
//         if(err) res.send("error during class creation");

//         res.send("Classroom created successfully.");
//     })


// })

//CRUD staff

exports.createStaff = async(req, res) => {
    try{
        const staff = await Staff.findOne({staffemail: req.body.staffemail})
        if(staff){
            return res.status(400).json({success: false, error: 'This email is already in use. Please signin.'})
        }

        const newStaff = new Staff(req.body);
        const {staffname, staffemail, staffcontact, stafftopic, classteacher} = newStaff
        await newStaff.save()

        //cookie to keep the user logged in after signup.
        //let userId = req.params._id;

        // const token = signToken(newUser._id);
        // res.cookie('auth_token', token, { httpOnly: true });

        res.json({success: true, user: {staffname, staffemail, staffcontact, stafftopic, classteacher}});
    }catch(error){
        res.status(500).json({success: false, error });
    }
}

//CRUD student


