import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Admin(props) {  // ✅ Changed function name to uppercase
  const { _id, firstName, lastName, title, subjectExpertise, email, phone, hireDate, qualifications, assignedClasses, profilePicture } = props.teacher;

  const navigate = useNavigate(); // ✅ Corrected variable name

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/teachers/${_id}`)
      .then(res => res.data)
      .then(() => {
        navigate("/"); 
        navigate("/adminDetils");
      });
  };

  return (
    <div className='ima'>
      <br />
      
      <h1 className='ima1'>ID: {_id}</h1>
      <h1 className='ima1'>First Name: {firstName}</h1>
      <h1 className='ima1'>Last Name: {lastName}</h1>
      <h1 className='ima1'>Title: {title}</h1>
      <h1 className='ima1'>Subject Expertise: {subjectExpertise}</h1>
      <h1 className='ima1'>Email: {email}</h1>
      <h1 className='ima1'>Phone: {phone}</h1>
      <h1 className='ima1'>Hire Date: {hireDate}</h1>
      <h1 className='ima1'>Qualifications: {qualifications}</h1>
      <h1 className='ima1'>Assigned Classes: {assignedClasses}</h1>
      <h1 className='ima1'>Profile Picture: {profilePicture}</h1>

      <Link to={`/adminDetils/${_id}`}>Update</Link> {/* ✅ Fixed route typo */}

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Admin;  // ✅ Export with correct component name
