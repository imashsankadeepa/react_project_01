import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Admin from "../admin/admin"; // ✅ Corrected import to 'Admin'

const URL = "http://localhost:5000/teachers"; // URL to fetch teachers

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AdminDetails() {  // ✅ Renamed component to start with uppercase
  const [teachers, setTeachers] = useState([]);
  
  useEffect(() => {
    fetchHandler().then((data) => setTeachers(data.teachers)); // Assuming 'teachers' is the key in the response
  }, []);

  return (
    <div>
      <Nav />
      <h1>Teacher Details</h1>
      <div>
        {teachers && teachers.map((teacher, i) => (
          <div key={i}>
            <Admin teacher={teacher} /> {/* Display teacher details using Admin component */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDetails; // ✅ Renamed export to match component name
