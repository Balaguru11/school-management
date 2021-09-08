import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import StaffModel from './models/staffmodel';
//import ClassroomModel from './models/classroommodel';

//importing components
import Adminlogin from './components/login/adminlogin'
import Stafflogin from './components/login/stafflogin'
import Studentlogin from './components/login/studentlogin'
import Addstudent from './components/student/Addstudent'
import Register from './components/admin/adminregister'
import Admindash from './views/admindash';

function App() {
  return (
    <div className="App">
      <h1>School Management System</h1>
      
     <Router>
      <Switch>
        
        <Route exact path="/" component={Adminlogin}/>
        <Route exact path="/admin-login" component={Adminlogin}/>
        <Route exact path="/staff-login" component={Stafflogin}/>
        <Route exact path="/student-login" component={Studentlogin}/>
        <Route exact path="/admin/add" component={Register}/>
        <Route exact path="/admin/addstudent" component={Addstudent}/>
        <Route exact path="/admin-dashboard" component={Admindash}/>
      </Switch>
    
     </Router>
    </div>
  );
}

export default App;
