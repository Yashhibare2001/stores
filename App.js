import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreList from "./stores/StoreList";
import StoreDetails from "./stores/StoreDetails";
import StoreForm from "./stores/StoreForm";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-10">
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/stores/add" element={<StoreForm />} />
          <Route path="/stores/edit/:id" element={<StoreForm />} />
          <Route path="/stores/:id" element={<StoreDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
