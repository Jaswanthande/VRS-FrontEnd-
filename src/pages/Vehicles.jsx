import { useEffect, useState } from "react";
import api from "../services/api";
import VehicleCard from "../components/VehicleCard";
import { Link } from "react-router-dom";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function getVehicles() {
      try {
        const response = await api.get("/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getVehicles();
  }, []);

  async function deleteVehicle(id) {
    try {
      await api.delete(`/vehicles/${id}`);

      setVehicles(
        vehicles.filter(
          (vehicle) => vehicle.id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="vehicles-page">

      {/* Vehicles Header */}
      <div className="vehicles-header">
        <h1>Available Vehicles</h1>

        <Link to="/vehicles/add" className="add-btn">
           Add Vehicle
        </Link>
      </div>

      {/* Vehicle Cards */}
      <div className="vehicles">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onDelete={deleteVehicle}
          />
        ))}
      </div>

    </div>
  );
}

export default Vehicles;