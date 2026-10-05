
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditVehicle() {

  const { id } = useParams();
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

  useEffect(() => {
    getVehicle();
  }, [id]);

  async function getVehicle() {
    const response = await api.get(`/vehicles/${id}`);

    setFormData({
      name: response.data.name || "",
      brand: response.data.brand || "",
      category: response.data.category || "",
      image: response.data.image || "",
      description: response.data.description || "",
      price: response.data.price ?? "",
      fuelType: response.data.fuelType || "",
      transmission: response.data.transmission || "",
      engine: response.data.engine || ""
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/vehicles/${id}`, {
      ...formData,
      price: Number(formData.price)
    });

    navigate("/vehicles");
  }

  return (
    <div className="form-container">
      <h2>Edit Vehicle</h2>

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
          placeholder="Fuel Type"
          value={formData.fuelType}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
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
          Update Vehicle
        </button>

      </form>
    </div>
  );
}

export default EditVehicle;