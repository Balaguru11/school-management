import React from 'react';
import axios from 'axios';

function Addstaff(){

    const[staffname, setstaffname] = useState('')
    const[staffemail, setstaffemail] = useState('')
    const[staffcontact, setstaffcontact] = useState('')
    const[stafftopic, setstafftopic] = useState('')
    const[classteacher, setclassteacher] = useState('')

    function addstaff(){


        const staff = {staffname, staffemail, staffcontact, stafftopic, classteacher}

        axios.post('/api/admin/add-staff', staff)
        .then(res => {
            console.log(`User added successfully. ${user}`)
        })
        .catch(err => console.log(err));

    }


    return(

        <div class="container d-flex justify-content-center">
          <div className='col-md-6 justify-content-center my-5'>

            <form onSubmit={addstaff}>

            <h1>Add Staff</h1>

            
                <input type='text' placeholder='Name' className='form-control'
                value={staffname} onChange={(e)=>{setstaffname(e.target.value)}}/>

                <input type='email' placeholder='Email ID (only gmail allowed)' className='form-control'
                value={staffemail} onChange={(e)=>{setstaffemail(e.target.value)}}/>  
                
                <input type='number' placeholder='Mobile Number' className='form-control'
                value={staffcontact} onChange={(e)=>{setstaffcontact(e.target.value)}}/>

                <input type='text' placeholder='Subject handling' className='form-control'
                value={stafftopic} onChange={(e)=>{setstafftopic(e.target.value)}}/>

                <input type='radio' placeholder='Class Teacher' className='form-control'
                value={classteacher} onChange={(e)=>{setclassteacher(e.target.value)}}/>

                <input type='password' placeholder='Password' className='form-control'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <input type='submit' value='Add Staff' className='btn btn-primary'></input>
            </form>

        </div></div>



    )
}

export default Addstaff;