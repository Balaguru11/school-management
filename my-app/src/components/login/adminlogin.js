import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Adminlogin(){
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');

    const history = useHistory();

    function login(event){

        event.preventDefault()

        var user = {username:username, password:password}

        axios.post('/api/admin/login', user).then(res=>{
            alert(res.data);
            return res.history.push("/");
        }).catch(err=>{
            console.log(err);
        })
    }


    // function validate(){
    //     if((username==='Balaguru') && (password==='Balaguru123')){
    //         history.push('/admin-dashboard');
    //     }else{
    //         alert(`No Admin found with ${username}. Please try again.`);
    //     }
    // }

    function staff(){
        history.push('/staff-login');
    }

    function student(){
        history.push('/student-login');
    }

    return(
        <div class="container justify-content-center">
        
            <div className='row col-md-8 justify-content-center my-5'>
                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Admin Login</button>
                    </div>

                    <div className='col-md-3'>
                        <button onClick={staff} className='btn btn-secondary'>Staff Login</button>
                    </div>
                    <div className='col-md-3'>
                        <button onClick={student} className='btn btn-secondary'>Student Login</button>
                    </div>
            </div>

            <div className='col-md-8 justify-content-center my-5 box'>

            <form onSubmit={login}>

            <h1>Admin Login</h1>

                <input type='text' placeholder='Username' className='form-control'
                value={username} onChange={(e)=>{setusername(e.target.value)}}/>

                <input type='text' placeholder='Password' className='form-control'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <input type='submit' value='Login' className='btn btn-primary' />

            </form>

            </div>
        </div>

    )
}

export default Adminlogin