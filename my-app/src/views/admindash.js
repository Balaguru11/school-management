import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//import addstudent from '../components/student/Addstudent'

function Admindash(){

    const[name, setname] = useState('');
    const[mail, setmail] = useState('');
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');


    function register(event){

        event.preventDefault()

        var user = {name:name, mail:mail, username:username, password:password}

        if((name.length === 0) || (username.length === 0) || (password.length === 0) || (mail.length === 0)){
           alert("Please enter all the details.");
        }else if ((mail.startsWith('.', 0)) || (!mail.includes('@gmail.com', 0))){
                alert('Email ID is not valid.');
            }else{        
                axios.post('/api/admin/register', user).then(res=>{
                    console.log(res);
                    alert(res.data);
                }).catch(err=>{ 
                    console.log(err);
                })
        }
    }

    const history = useHistory()
    function addstudent(){
        history.push('/admin/addstudent');
    }
    
    function addstaff(){
        history.push('/admin/addstaff');
    }

    return(
        
        <div class="container d-flex justify-content-center">
          <div className='col-md-6 justify-content-center my-5'>

          <div className='row col-md-8 justify-content-center my-5'>
                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Add Classroom</button>
                    </div>

                    <div className='col-md-3'>
                        <button onClick={addstaff} className='btn btn-secondary'>Add Staff</button>
                    </div>
                    <div className='col-md-3'>
                        <button onClick={addstudent} className='btn btn-secondary'>Add Student</button>
                    </div>
            </div>

            <form onSubmit={register}>

            <h1>Admn Regstration Page</h1>

                <input type='text' placeholder='Name' className='form-control'
                value={name} onChange={(e)=>{setname(e.target.value)}}/>

                <input type='mail' placeholder='Email ID (only gmail allowed)' className='form-control'
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

export default Admindash