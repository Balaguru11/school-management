import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Stafflogin(){
    const[staffname, setstaffname] = useState('');
    const[staffcontact, setstaffcontact] = useState('');
    
    const history = useHistory();


    function login(event){

        event.preventDefault()

        var staff = {username:staffname, password:staffcontact}

        axios.post('/api/login/staff', staff).then(res=>{
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
    function admin(){
        history.push('/admin-login');
    }

    function student(){
        history.push('/student-login');
    }

    return(
        <div class="container justify-content-center">
        
            <div className='row col-md-8 justify-content-center my-5'>
                    <div className='col-md-3'>
                        <button onClick={admin} className='btn btn-secondary'>Admin Login</button>
                    </div>

                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Staff Login</button>
                    </div>
                    <div className='col-md-3'>
                        <button onClick={student} className='btn btn-secondary'>Student Login</button>
                    </div>
            </div>

            <div className='col-md-8 justify-content-center my-5 box'>

            <form onSubmit={login}>

                <h1>Staff Login</h1>

                    {/* <input type='select' placeholder='Select' className='form-control'
                    value={category} onSelect={(e)=>{setcategory(e.target.value)}}/> */}

                    <input type='text' placeholder='Username' className='form-control'
                    value={staffname} onChange={(e)=>{setstaffname(e.target.value)}}/>

                    <input type='text' placeholder='Password' className='form-control'
                    value={staffcontact} onChange={(e)=>{setstaffcontact(e.target.value)}}/>

                    <input type='submit' value='Login' className='btn btn-primary' />
            </form>
            </div>
        </div>
    )
}

export default Stafflogin