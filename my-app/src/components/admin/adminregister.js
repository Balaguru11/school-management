import React, { useState } from 'react';
import axios from 'axios';

function Register(){

    const[name, setName] = useState('');
    const[mail, setMail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    //const[role, setRole] = useState('admin')
    const[error, setError] = useState('');


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
                        setError('');
                    }else{
                        setError(res.data.error);
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

            { error && 
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    {error}
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

            }
            

            <form onSubmit={register}>

            <h1>Admin Registration</h1>

                <input type='text' placeholder='Name' className='form-control'
                value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <input type='email' placeholder='Email ID (only gmail allowed)' className='form-control'
                value={mail} onChange={(e)=>{setMail(e.target.value)}}/>  
                
                <input type='text' placeholder='Username' className='form-control'
                value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

                <input type='password' placeholder='Password' className='form-control'
                value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                <input type='submit' value='Register' className='btn btn-primary'></input>
            </form>

        </div></div>
    )
}

export default Register