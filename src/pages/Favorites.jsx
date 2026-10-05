
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFavorite } from "../features/favoriteSlice";
import "../index.css";

function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get favorite vehicles from Redux
  const favorites = useSelector(
    (state) => state.favorites?.favorites || []
  );

  // Remove a vehicle from favorites
  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="favorites-container">
      <h1 className="page-title">
        ❤️ My Favorite Vehicles
      </h1>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>No favorites yet!</h2>
          <p>
            Visit the Vehicles page and add vehicles
            to your favorites.
          </p>

          <button
            className="view-details-btn"
            onClick={() => navigate("/vehicles")}
          >
            Explore Vehicles
          </button>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((vehicle) => (
            <div
              className="favorite-card"
              key={vehicle.id}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
              />

              <div className="favorite-content">
                <h2>{vehicle.name}</h2>

                <p>{vehicle.category}</p>

                <p>
                  ⭐ {vehicle.rating || "4.8"}
                </p>

                <p className="favorite-price">
                  ₹ {vehicle.price} / day
                </p>

                <button
                  className="view-details-btn"
                  onClick={() =>
                    navigate(`/vehicles/${vehicle.id}`)
                  }
                >
                  View Details
                </button>

                <button
                  className="remove-favorite-btn"
                  onClick={() =>
                    handleRemove(vehicle.id)
                  }
                >
                  ❤️ Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;