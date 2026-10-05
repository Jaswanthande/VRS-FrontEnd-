
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "../features/favoriteSlice";
import "../index.css";

function VehicleCard({ vehicle, onDelete }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites || []
  );

  const isFavorite = favorites.some(
    (item) => String(item.id) === String(vehicle.id)
  );

  function handleFavorite() {
    dispatch(addFavorite(vehicle));
  }

  return (
    <div className="card">
      <img
        src={vehicle.image}
        alt={vehicle.name}
      />

      <div className="card-content">
        <h3>{vehicle.name}</h3>

        <p>{vehicle.category}</p>

        <p>⭐ {vehicle.rating || "4.8"}</p>

        <p className="price">
          ₹ {vehicle.price} / day
        </p>

        <div className="card-actions">
          <Link
            className="view-btn"
            to={`/vehicles/${vehicle.id}`}
          >
            View Details
          </Link>

          <Link
            className="edit-btn"
            to={`/edit-vehicle/${vehicle.id}`}
          >
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => onDelete(vehicle.id)}
          >
            Delete
          </button>
        </div>

        <button
          className="favorite-btn"
          onClick={handleFavorite}
          disabled={isFavorite}
        >
          {isFavorite
            ? "❤️ Added to Favorites"
            : "❤️ Add To Favorites"}
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;