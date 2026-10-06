import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const vehicle = location.state?.vehicle;

  const [days, setDays] = useState(1);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  if (!vehicle) {
    return (
      <div className="booking-container">
        <h2>Vehicle information not found.</h2>

        <button
          className="payment-btn"
          onClick={() => navigate("/vehicles")}
        >
          Back to Vehicles
        </button>
      </div>
    );
  }

  const rentalAmount = Number(vehicle.price) * Number(days);
  const securityDeposit = Number(vehicle.securityDeposit || 0);
  const totalAmount = rentalAmount + securityDeposit;

  const handleContinue = (e) => {
    e.preventDefault();

    if (!pickupLocation || !pickupDate || !returnDate) {
      alert("Please fill all booking details.");
      return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
      alert("Return date must be after pickup date.");
      return;
    }

    navigate("/payment", {
      state: {
        vehicle,
        days,
        pickupLocation,
        pickupDate,
        returnDate,
        rentalAmount,
        securityDeposit,
        totalAmount,
      },
    });
  };

  return (
    <div className="booking-container">

      <h1>🚗 Book Your Vehicle</h1>

      <div className="booking-card">

        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="booking-image"
        />

        <div className="booking-details">

          <h2>{vehicle.name}</h2>

          <p>
            <strong>Category:</strong> {vehicle.category}
          </p>

          <p>
            <strong>Price:</strong> ₹{vehicle.price} / day
          </p>

          <form onSubmit={handleContinue}>

            <label>Rental Days</label>

            <input
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />

            <label>Pickup Location</label>

            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />

            <label>Pickup Date</label>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />

            <label>Return Date</label>

            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />

            <div className="booking-summary">

              <p>
                Rental Amount:
                <strong> ₹{rentalAmount}</strong>
              </p>

              <p>
                Security Deposit:
                <strong> ₹{securityDeposit}</strong>
              </p>

              <hr />

              <h3>
                Total:
                <span> ₹{totalAmount}</span>
              </h3>

            </div>

            <button type="submit" className="payment-btn">
              Continue to Payment 💳
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Booking;