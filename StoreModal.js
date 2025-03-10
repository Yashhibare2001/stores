import React from "react";

const StoreModal = ({ store, onClose }) => {
  if (!store) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold">{store.name}</h2>
        <p className="text-gray-600">{store.address}</p>
        <p className="text-sm text-gray-500">{store.email}</p>
        <p className="text-yellow-500 font-bold">⭐ {store.rating}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default StoreModal;
