import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user ? user.email : "Guest"}</h2>
      <p>Dashboard content goes here...</p>
    </div>
  );
};

export default Dashboard;