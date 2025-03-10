import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StoreForm = () => {
  const { id } = useParams(); // Get store ID if editing
  const navigate = useNavigate();
  const [store, setStore] = useState({
    name: "",
    email: "",
    address: "",
    owner_id: "",
    rating: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/stores/${id}`)
        .then((res) => res.json())
        .then((data) => setStore(data))
        .catch((err) => console.error("Error fetching store:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id ? `http://localhost:3000/api/stores/${id}` : "http://localhost:3000/api/stores";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(store),
    });

    if (response.ok) {
      navigate("/");
    } else {
      alert("Error saving store!");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold">{id ? "Edit Store" : "Add Store"}</h2>
      <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md rounded-lg">
        <input type="text" name="name" placeholder="Store Name" value={store.name} onChange={handleChange} required className="block w-full p-2 border mb-3" />
        <input type="email" name="email" placeholder="Email" value={store.email} onChange={handleChange} required className="block w-full p-2 border mb-3" />
        <input type="text" name="address" placeholder="Address" value={store.address} onChange={handleChange} required className="block w-full p-2 border mb-3" />
        <input type="number" name="owner_id" placeholder="Owner ID" value={store.owner_id} onChange={handleChange} required className="block w-full p-2 border mb-3" />
        <input type="number" name="rating" placeholder="Rating (0-5)" step="0.1" max="5" min="0" value={store.rating} onChange={handleChange} required className="block w-full p-2 border mb-3" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{id ? "Update" : "Add"} Store</button>
      </form>
    </div>
  );
};

export default StoreForm;
