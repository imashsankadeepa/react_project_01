
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/home';
import User from './Components/User/User';
import UserDetails from './Components/UserDetails/UserDetails';
import AddUser from "./Components/AddUser/AddUser"
import UpdateUser from './Components/UpdateUser/UpdateUser';
import AddAdmin from './Components/addAdmin/addAdmin';
import AdminHome from './Components/adminHome/adminHome';
import adminDetils from './Components/adminDetails/adminDetils';
import AdminDetails from './Components/adminDetails/adminDetils';

function App() {
  return (
    <div >
    
     <React.Fragment>
      <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/mainhome" element={<Home/>}/>
          <Route path ="/adduser" element={<AddUser/>}/>
          <Route path ="/userDetails" element={<UserDetails/>}/>
          <Route path ="/userDetails/:id" element={<UpdateUser/>}/>
          <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/adminHome" element={<AdminHome />} />
           <Route path="/adminDetils" element={<AdminDetails/>} />
           <Route path="/adminDetils/:id" element={<AdminDetails/>} />
      </Routes>
     </React.Fragment>


   
     
    </div>
  );
}

export default App;
