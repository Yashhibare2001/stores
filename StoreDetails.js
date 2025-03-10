import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StoreDetails = () => {
  const { id } = useParams(); // Get store ID from URL
  const [store, setStore] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/stores/${id}`)
      .then((response) => response.json())
      .then((data) => setStore(data))
      .catch((error) => console.error("Error fetching store details:", error));
  }, [id]);

  if (!store) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-4">{store.name}</h2>
      <p className="text-gray-600">📍 {store.address}</p>
      <p className="text-sm text-gray-500">📧 {store.email}</p>
      <p className="text-yellow-500 font-bold text-lg">⭐ {store.rating}</p>

      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        🔙 Back to Stores
      </Link>
    </div>
  );
};

export default StoreDetails;
