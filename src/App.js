import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StoreList from "./pages/StoreList";
import UserList from "./pages/UserList";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";
import Login from "./pages/Login";
import "./App.css";
import "./Styles/Sidebar.css";
import "./Styles/Navbar.css";
import "./Styles/StoreList.css";
import "./Styles/Signup.css";
import "./Styles/Login.css";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className="container">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stores" element={<StoreList />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/store-owner" element={<StoreOwnerDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;