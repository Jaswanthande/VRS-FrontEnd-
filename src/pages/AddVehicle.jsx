
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddVehicle() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    image: "",
    description: "",
    price: "",
    fuelType: "",
    transmission: "",
    engine: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/vehicles", {
      ...formData,
      price: Number(formData.price)
    });

    navigate("/vehicles");
  }

  return (
    <div className="form-container">
      <h2>Add Vehicle</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Bike / Car)"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Rental Price Per Day"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fuelType"
          placeholder="Fuel Type (Petrol / Diesel / Electric)"
          value={formData.fuelType}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission (Manual / Automatic)"
          value={formData.transmission}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="engine"
          placeholder="Engine Capacity (e.g. 650cc)"
          value={formData.engine}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Add Vehicle
        </button>

      </form>
    </div>
  );
}

export default AddVehicle;