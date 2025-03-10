import { useEffect, useState } from "react";

const StoreOwnerDashboard = () => {
  const [ratings, setRatings] = useState([
    { user: "John Doe", rating: 5 },
    { user: "Jane Smith", rating: 4 },
    { user: "Jhon", rating: 4 },
    { user: "Smith", rating: 3 },
    { user: "Arun", rating: 5 },
    { user: "Modi", rating: 4 }
  ]);

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>
            <p>User: {rating.user}</p>
            <p>Rating: {rating.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreOwnerDashboard;