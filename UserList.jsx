import { useState } from "react";

const UserList = () => {
  const [users] = useState([
    { 
      id: 1,
      name: "John Doe", 
      email: "john@example.com", 
      role: "user" 
    },
    { 
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "admin" 
    }
  ]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;