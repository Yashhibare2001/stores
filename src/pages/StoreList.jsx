import { useState } from "react";
import StoreCard from "../components/StoreCard";
import "../Styles/StoreList.css";

const StoreList = () => {
  const [stores, setStores] = useState([
    { id: 1, name: "Store A", address: "123 Main St", rating: 4 },
    { id: 2, name: "Store B", address: "456 Market St", rating: 5 },
    { id: 3, name: "Store C", address: "400 Shop St", rating: 2 },
    { id: 4, name: "Store D", address: "456 Market St", rating: 3 }
  ]);

  const handleRate = (storeId, rating) => {
    setStores((prevStores) =>
      prevStores.map((store) =>
        store.id === storeId ? { ...store, rating } : store
      )
    );
  };

  return (
    <div>
      <h2>Store List</h2>
      <div className="store-list">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} onRate={handleRate} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;