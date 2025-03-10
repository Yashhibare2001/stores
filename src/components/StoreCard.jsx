import { useState } from "react";
import "../Styles/storecard.css";

const StoreCard = ({ store, onRate }) => {
  const [userRating, setUserRating] = useState(store.rating);

  const handleRating = (rating) => {
    setUserRating(rating);
    if (onRate) {
      onRate(store.id, rating);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star filled" : "star"}
          onClick={() => handleRating(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="store-card">
      <h3>{store.name}</h3>
      <p>Address: {store.address}</p>
      <div className="rating">{renderStars(userRating)}</div>
    </div>
  );
};

export default StoreCard;
