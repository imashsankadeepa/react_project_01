import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addform.css';

function AddUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        subject: "",
        dueDate: "",
        assignedBy: "",
        fileUrl: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        subject: "",
        dueDate: "",
        assignedBy: "",
        fileUrl: ""
    });

    const validateField = (name, value) => {
        let message = "";

        switch (name) {
            case "title":
                if (!value) {
                    message = "Title is required.";
                } else if (value.length < 3) {
                    message = "Title must be at least 3 characters.";
                }
                break;
            case "description":
                if (!value) {
                    message = "Description is required.";
                } else if (value.length < 10) {
                    message = "Description must be at least 10 characters.";
                }
                break;
            case "subject":
                if (!value) {
                    message = "Subject is required.";
                } else if (value.length < 3) {
                    message = "Subject must be at least 3 characters.";
                }
                break;
            case "dueDate":
                if (!value) {
                    message = "Due Date is required.";
                } else if (new Date(value) < new Date()) {
                    message = "Due Date must be in the future.";
                }
                break;
            case "assignedBy":
                if (!value) {
                    message = "Assigned By is required.";
                } else if (value.length < 3) {
                    message = "Assigned By must be at least 3 characters.";
                }
                break;
            case "fileUrl":
                if (value && !/^(https?:\/\/[^\s]+)$/.test(value)) {
                    message = "Invalid URL format.";
                }
                break;
            default:
                break;
        }

        return message;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate the field when it's changed
        const errorMessage = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));

        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submission
        let valid = true;
        const newErrors = {};

        Object.keys(inputs).forEach((key) => {
            const errorMessage = validateField(key, inputs[key]);
            if (errorMessage) {
                valid = false;
                newErrors[key] = errorMessage;
            }
        });

        setErrors(newErrors);

        // Proceed only if all fields are valid
        if (valid) {
            console.log("Form Inputs:", inputs);
            sendRequest().then(() => navigate('/userDetails'));
        }
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/users", {
            title: String(inputs.title),
            description: String(inputs.description),
            subject: String(inputs.subject),
            dueDate: Date(inputs.dueDate),
            assignedBy: String(inputs.assignedBy),
            fileUrl: String(inputs.fileUrl),
        }).then(res => res.data);
    };

    return (
        <div>
            <Nav />
            <h1>Add Assignment</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={inputs.title}
                    required
                />
                {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
                <br /><br />

                <label>Description</label>
                <br />
                <textarea
                    name='description'
                    onChange={handleChange}
                    value={inputs.description}
                    required
                />
                {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                <br /><br />

                <label>Subject</label>
                <br />
                <input
                    type='text'
                    name='subject'
                    onChange={handleChange}
                    value={inputs.subject}
                    required
                />
                {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                <br /><br />

                <label>Due Date</label>
                <br />
                <input
                    type='date'
                    name='dueDate'
                    onChange={handleChange}
                    value={inputs.dueDate}
                    required
                />
                {errors.dueDate && <p style={{ color: "red" }}>{errors.dueDate}</p>}
                <br /><br />

                <label>Assigned By</label>
                <br />
                <input
                    type='text'
                    name='assignedBy'
                    onChange={handleChange}
                    value={inputs.assignedBy}
                    required
                />
                {errors.assignedBy && <p style={{ color: "red" }}>{errors.assignedBy}</p>}
                <br /><br />

                <label>File URL (Optional)</label>
                <br />
                <input
                    type='text'
                    name='fileUrl'
                    onChange={handleChange}
                    value={inputs.fileUrl}
                />
                {errors.fileUrl && <p style={{ color: "red" }}>{errors.fileUrl}</p>}
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
