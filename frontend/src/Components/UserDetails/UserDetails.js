import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import User from "../User/User";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <Nav />
      <div>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserDetails;
