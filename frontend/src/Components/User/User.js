import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./userform.css";

function User({ user }) {
  const { _id, title, description, subject, dueDate, assignedBy, fileUrl } = user;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      navigate("/userDetails"); // Redirect after successful deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="user-card">
      <h2>Task Details</h2>
      <div className="user-info">
     {/* <p><strong>ID:</strong> {_id}</p>*/}
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Due Date:</strong> {dueDate}</p>
        <p><strong>Assigned By:</strong> {assignedBy}</p>
        <p><strong>File URL:</strong> <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a></p>
      </div>

      <div className="user-actions">
        <Link to={`/UserDetails/${_id}`} className="update-btn">Update</Link>
        <button onClick={deleteHandler} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default User;
