import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";

function UpdateUser() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    subject: "",
    dueDate: "",
    assignedBy: "",
    fileUrl: "",
  });

  const [prevInputs, setPrevInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const user = response.data.users || {}; // Access user data
        setInputs({
          title: user.title || "",
          description: user.description || "",
          subject: user.subject || "",
          dueDate: user.dueDate ? user.dueDate.split("T")[0] : "",
          assignedBy: user.assignedBy || "",
          fileUrl: user.fileUrl || "",
        });

        setPrevInputs({
          title: user.title || "",
          description: user.description || "",
          subject: user.subject || "",
          dueDate: user.dueDate ? user.dueDate.split("T")[0] : "",
          assignedBy: user.assignedBy || "",
          fileUrl: user.fileUrl || "",
        });

        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch user data.");
        setLoading(false);
      }
    };

    if (id) {
      fetchHandler();
    } else {
      setError("No user ID provided.");
      setLoading(false);
    }
  }, [id]);

  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "title":
        if (value.length < 3)
          message = "Title must be at least 3 characters.";
        break;
      case "description":
        if (value.length > 0 && value.length < 10)
          message = "Description must be at least 10 characters.";
        break;
      case "subject":
        if (value.length > 0 && value.length < 3)
          message = "Subject must be at least 3 characters.";
        break;
      case "dueDate":
        if (value && new Date(value) < new Date())
          message = "Due Date must be in the future.";
        break;
      case "assignedBy":
        if (value.length > 0 && value.length < 3)
          message = "Assigned By must be at least 3 characters.";
        break;
      case "fileUrl":
        if (value && !/^(https?:\/\/[^\s]+)$/.test(value))
          message = "Invalid URL format.";
        break;
      default:
        break;
    }

    return message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const errorMsg = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const sendRequest = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/users/${id}`, {
        title: inputs.title || prevInputs.title,
        description: inputs.description || prevInputs.description,
        subject: inputs.subject || prevInputs.subject,
        dueDate: inputs.dueDate || prevInputs.dueDate,
        assignedBy: inputs.assignedBy || prevInputs.assignedBy,
        fileUrl: inputs.fileUrl || prevInputs.fileUrl,
      });
      return response.data;
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    const newErrors = {};
    Object.keys(inputs).forEach((key) => {
      const errorMsg = validateField(key, inputs[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setErrors(newErrors);

    // Prevent submission if errors exist
    if (Object.values(newErrors).some((msg) => msg)) {
      return;
    }

    console.log("Form Inputs:", inputs);
    sendRequest().then(() => navigate("/userDetails"));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Nav />
      <h1>Update Assignment</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" name="title" value={inputs.title} onChange={handleChange} required />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        <br /><br />

        <label>Description</label>
        <br />
        <textarea name="description" value={inputs.description} onChange={handleChange} required />
        {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
        <br /><br />

        <label>Subject</label>
        <br />
        <input type="text" name="subject" value={inputs.subject} onChange={handleChange} required />
        {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        <br /><br />

        <label>Due Date</label>
        <br />
        <input type="date" name="dueDate" value={inputs.dueDate} onChange={handleChange} required />
        {errors.dueDate && <p style={{ color: "red" }}>{errors.dueDate}</p>}
        <br /><br />

        <label>Assigned By</label>
        <br />
        <input type="text" name="assignedBy" value={inputs.assignedBy} onChange={handleChange} required />
        {errors.assignedBy && <p style={{ color: "red" }}>{errors.assignedBy}</p>}
        <br /><br />

        <label>File URL (Optional)</label>
        <br />
        <input type="text" name="fileUrl" value={inputs.fileUrl} onChange={handleChange} />
        {errors.fileUrl && <p style={{ color: "red" }}>{errors.fileUrl}</p>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
