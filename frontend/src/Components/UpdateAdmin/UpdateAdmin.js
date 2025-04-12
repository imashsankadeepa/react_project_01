import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

function UpdateTeacher() {
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

    const history = useNavigate();
    const { id } = useParams(); // Extract the teacher ID from the URL

    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/teachers/${id}`);
                setInputs(response.data.teacher); // Set fetched teacher data to inputs
            } catch (error) {
                console.error("Error fetching teacher:", error);
            }
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        try {
            await axios.put(`http://localhost:5000/teachers/${id}`, {
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
            });
        } catch (error) {
            console.error("Error updating teacher:", error);
        }
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/teacherDetails')); // Redirect to teacher details page after successful update
    };

    return (
        <div>
            <Nav />
            <h1>Update Teacher</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <br />
                <input
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    value={inputs.firstName}
                    required
                />
                <br /><br />

                <label>Last Name</label>
                <br />
                <input
                    type='text'
                    name='lastName'
                    onChange={handleChange}
                    value={inputs.lastName}
                    required
                />
                <br /><br />

                <label>Title</label>
                <br />
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={inputs.title}
                    required
                />
                <br /><br />

                <label>Subject Expertise</label>
                <br />
                <input
                    type='text'
                    name='subjectExpertise'
                    onChange={handleChange}
                    value={inputs.subjectExpertise}
                    required
                />
                <br /><br />

                <label>Email</label>
                <br />
                <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={inputs.email}
                    required
                />
                <br /><br />

                <label>Phone</label>
                <br />
                <input
                    type='text'
                    name='phone'
                    onChange={handleChange}
                    value={inputs.phone}
                    required
                />
                <br /><br />

                <label>Hire Date</label>
                <br />
                <input
                    type='date'
                    name='hireDate'
                    onChange={handleChange}
                    value={inputs.hireDate}
                    required
                />
                <br /><br />

                <label>Qualifications</label>
                <br />
                <input
                    type='text'
                    name='qualifications'
                    onChange={handleChange}
                    value={inputs.qualifications}
                    required
                />
                <br /><br />

                <label>Assigned Classes</label>
                <br />
                <input
                    type='text'
                    name='assignedClasses'
                    onChange={handleChange}
                    value={inputs.assignedClasses}
                    required
                />
                <br /><br />

                <label>Profile Picture (Optional)</label>
                <br />
                <input
                    type='text'
                    name='profilePicture'
                    onChange={handleChange}
                    value={inputs.profilePicture}
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateTeacher;
