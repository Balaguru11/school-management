const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
require("dotenv").config();
require('./database/mongoose');



// body-parser depreciated and part of exppress now.
app.use(express.json());
app.use(cookieParser());


const PORT=process.env.PORT || 8080

//Passport middlewares

// import middlewares
const Admin = require('./routes/adminroute')

app.use('/api/admin', Admin);


// Listner
app.listen(PORT, ()=>{
    console.log(`Server started at Port http://localhost:${PORT}`);
});