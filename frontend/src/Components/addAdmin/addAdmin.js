import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddAdmin() {  // Change here: from addAdmin to AddAdmin
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        title: "",
        subjectExpertise: "",
        email: "",
        phone: "",
        hireDate: "",
        qualifications: "",
        assignedClasses: "",
        profilePicture: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => navigate('/adminDetils'));
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/teachers", {
            firstName: String(inputs.firstName),
            lastName: String(inputs.lastName),
            title: String(inputs.title),
            subjectExpertise: String(inputs.subjectExpertise),
            email: String(inputs.email),
            phone: String(inputs.phone),
            hireDate: Date(inputs.hireDate),
            qualifications: String(inputs.qualifications),
            assignedClasses: String(inputs.assignedClasses),
            profilePicture: String(inputs.profilePicture),
        }).then(res => res.data);
    };

    return (
        <div>
            <Nav />
            <h1>Add Teacher</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <br />
                <input type='text' name='firstName' onChange={handleChange} value={inputs.firstName} required />
                <br /><br />

                <label>Last Name</label>
                <br />
                <input type='text' name='lastName' onChange={handleChange} value={inputs.lastName} required />
                <br /><br />

                <label>Title</label>
                <br />
                <input type='text' name='title' onChange={handleChange} value={inputs.title} required />
                <br /><br />

                <label>Subject Expertise</label>
                <br />
                <input type='text' name='subjectExpertise' onChange={handleChange} value={inputs.subjectExpertise} required />
                <br /><br />

                <label>Email</label>
                <br />
                <input type='email' name='email' onChange={handleChange} value={inputs.email} required />
                <br /><br />

                <label>Phone</label>
                <br />
                <input type='text' name='phone' onChange={handleChange} value={inputs.phone} required />
                <br /><br />

                <label>Hire Date</label>
                <br />
                <input type='date' name='hireDate' onChange={handleChange} value={inputs.hireDate} required />
                <br /><br />

                <label>Qualifications</label>
                <br />
                <input type='text' name='qualifications' onChange={handleChange} value={inputs.qualifications} required />
                <br /><br />

                <label>Assigned Classes</label>
                <br />
                <input type='text' name='assignedClasses' onChange={handleChange} value={inputs.assignedClasses} required />
                <br /><br />

                <label>Profile Picture (Optional)</label>
                <br />
                <input type='text' name='profilePicture' onChange={handleChange} value={inputs.profilePicture} />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddAdmin;  // Change here: make sure you export AddAdmin
