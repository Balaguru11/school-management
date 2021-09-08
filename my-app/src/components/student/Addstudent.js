import React, { useState } from 'react';
import axios from 'axios';

function Addstudent(){

    const[st_name, setst_name] = useState('');
    const[st_contact, setst_contact] = useState('');
    const[st_class, setst_class] = useState([]);

    function addstudent(event){
        
        event.preventDefault()

        var student = {st_name:st_name, st_contact:st_contact, st_class:st_class}

        axios.post('/api/student/add', student).then(res=>{
            console.log(res);
            alert(res.data);
        }).catch(err=>{
            console.log(err);
        })

    }


    return(
        <div class="container d-flex justify-content-center">
          <div className='col-md-6 justify-content-center my-5'>

            <form onSubmit={addstudent}>

            <h2>Add a Student</h2>

                <input type='text' placeholder='Student Name' className='form-control'
                value={st_name} onChange={(e)=>{setst_name(e.target.value)}}/>

                <input type='text' placeholder='Student Contact No' className='form-control'
                value={st_contact} onChange={(e)=>{setst_contact(e.target.value)}}/>
            
                <input type='select' placeholder='Studying' className='form-control'
                value={st_class} onChange={(e)=>{setst_class(e.target.value)}}/>

                <input type='submit' value='Add Student' className='btn btn-primary' />

            </form>


        </div></div>



    )
}

export default Addstudent