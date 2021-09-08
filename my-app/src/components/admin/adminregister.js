import React, { useState } from 'react';
import axios from 'axios';

function Register(){

    const[name, setname] = useState('');
    const[mail, setmail] = useState('');
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');
    //const[role, setrole] = useState('admin')
    //const[error, seterror] = useState('');


    function register(event){

        event.preventDefault();

        // if((name.length === 0) || (username.length === 0) || (password.length === 0) || (mail.length === 0)){
        //    alert("Please enter all the details.");
        // }else if ((mail.startsWith('.', 0)) || (!mail.includes('@gmail.com', 0))){
        //         alert('Email ID is not valid.');
        // }else{

            const user = {name:name, mail:mail, username:username, password:password}

            axios.post('/api/admin/register', user)
                .then(res => {
                    if(res.data.success === true){
                        alert("User created succesfully")
                    }else{
                        alert("error here")
                    }
                    //console.log(res.msg);
                })
                .catch(err => { 
                    console.log(err.data);
                })
            

        
        }

    

        
    

    return(
        
        <div class="container d-flex justify-content-center">
          <div className='col-md-6 justify-content-center my-5'>

              <div>

              </div>

            <form onSubmit={register}>

            <h1>Admin Registration</h1>

                <input type='text' placeholder='Name' className='form-control'
                value={name} onChange={(e)=>{setname(e.target.value)}}/>

                <input type='email' placeholder='Email ID (only gmail allowed)' className='form-control'
                value={mail} onChange={(e)=>{setmail(e.target.value)}}/>  
                
                <input type='text' placeholder='Username' className='form-control'
                value={username} onChange={(e)=>{setusername(e.target.value)}}/>

                <input type='password' placeholder='Password' className='form-control'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <input type='submit' value='Register' className='btn btn-primary'></input>
            </form>

        </div></div>
    )
}

export default Register