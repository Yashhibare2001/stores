import StoreModal from "./StoreModal"; // Import the modal

const StoreList = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Store Ratings</h2>

      {/* Store Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentStores.map((store) => (
          <div key={store.id} className="bg-white p-4 shadow-md rounded-lg">
            <button onClick={() => setSelectedStore(store)} className="text-xl font-semibold text-blue-600 hover:underline">
              {store.name}
            </button>
            <p className="text-gray-600">{store.address}</p>
            <p className="text-yellow-500 font-bold">⭐ {store.rating}</p>
          </div>
        ))}
      </div>

      {/* Store Details Modal */}
      {selectedStore && <StoreModal store={selectedStore} onClose={() => setSelectedStore(null)} />}
    </div>
  );
};
