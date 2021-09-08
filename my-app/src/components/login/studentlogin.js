import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Studentlogin(){
    const[st_name, setst_name] = useState('');
    const[st_contact, setst_contact] = useState('');
    
    const history = useHistory();

    function login(event){

        event.preventDefault()

        var student = {username:st_name, password:st_contact}

        axios.post('/api/login/student', student).then(res=>{
            console.log(res);
            alert(res.data);
            history.push('/staff-dashboard');
        }).catch(err=>{
            console.log(err);
        })
    }


    // function validate(event){

    //     event.preventDefault()

    //     var user = {staffname:username, staffcontact:password}

    //     axios.post('/api/login/staffvalidate', user).then(res=>{
    //         history.push('/staff-dashboard');
    //     }).catch(err=>{
    //         console.log(err);
    //         alert("No user found. Please try again.");
    //     })
    // }

    function staff(){
        history.push('/staff-login');
    }

    function admin(){
        history.push('/admin-login');
    }


    return(
        
        <div class="container justify-content-center">
        
        <div className='row col-md-8 justify-content-center my-5'>
                    <div className='col-md-3'>
                        <button onClick={admin} className='btn btn-secondary'>Admin Login</button>
                    </div>

                    <div className='col-md-3'>
                        <button onClick={staff} className='btn btn-secondary'>Staff Login</button>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Student Login</button>
                    </div>
            </div>

            <div className='col-md-8 justify-content-center my-5 box'>

            <form onSubmit={login}>

                        <h1>Student Login</h1>

                            {/* <input type='select' placeholder='Select' className='form-control'
                            value={category} onSelect={(e)=>{setcategory(e.target.value)}}/> */}

                            <input type='text' placeholder='Username' className='form-control'
                            value={st_name} onChange={(e)=>{setst_name(e.target.value)}}/>

                            <input type='text' placeholder='Password' className='form-control'
                            value={st_contact} onChange={(e)=>{setst_contact(e.target.value)}}/>

                            <input type='submit' value='Login' className='btn btn-primary' />

                        </form>
            </div>
            </div>

    )
}

export default Studentlogin