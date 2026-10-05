
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function VehicleDetails() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getVehicle() {
      try {
        const response = await api.get(`/vehicles/${id}`);
        setVehicle(response.data);
      } catch (error) {
        console.log(error);
        setError("Vehicle not found. Please try again.");
      }
    }

    getVehicle();
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!vehicle) {
    return <h2>Loading vehicle details...</h2>;
  }

  return (
    <div className="details">
      <img src={vehicle.image} alt={vehicle.name} />

      <h1>{vehicle.name}</h1>
      <p>{vehicle.description}</p>

      <h3>Category</h3>
      <p>{vehicle.category}</p>

      <h3>Engine Capacity</h3>
      <p>{vehicle.engineCapacity}</p>

      <h3>Fuel Type</h3>
      <p>{vehicle.fuelType}</p>

      <h3>Transmission</h3>
      <p>{vehicle.transmission}</p>

      <h3>Price Per Day</h3>
      <p>₹ {vehicle.price}</p>

      <h3>Security Deposit</h3>
      <p>₹ {vehicle.securityDeposit}</p>

      <h3>Rating</h3>
      <p>⭐ {vehicle.rating}</p>

      <h3>Availability</h3>
      <p>{vehicle.availability}</p>

      <h3>Location</h3>
      <p>{vehicle.location}</p>
    </div>
  );
}

export default VehicleDetails;