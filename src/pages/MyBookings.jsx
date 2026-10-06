import { useEffect, useState } from "react";
import api from "../services/api";
import "../index.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBookings() {
      try {
        const response = await api.get("/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Failed to load bookings:", error);
      } finally {
        setLoading(false);
      }
    }

    getBookings();
  }, []);

  if (loading) {
    return <h2>Loading bookings...</h2>;
  }

  return (
    <div className="bookings-container">

      <h1>📋 My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="empty-bookings">
          <h2>No bookings yet</h2>
          <p>Book a vehicle to see your bookings here.</p>
        </div>
      ) : (
        <div className="bookings-grid">

          {bookings.map((booking) => (
            <div className="booking-history-card" key={booking.id}>

              <h2>🚗 {booking.vehicleName}</h2>

              <p>
                <strong>Booking ID:</strong>{" "}
                {booking.id}
              </p>

              <p>
                <strong>Transaction ID:</strong>{" "}
                {booking.transactionId}
              </p>

              <p>
                <strong>Rental Days:</strong>{" "}
                {booking.days}
              </p>

              <p>
                <strong>Pickup:</strong>{" "}
                {booking.pickupLocation}
              </p>

              <p>
                <strong>Pickup Date:</strong>{" "}
                {booking.pickupDate}
              </p>

              <p>
                <strong>Return Date:</strong>{" "}
                {booking.returnDate}
              </p>

              <p>
                <strong>Payment:</strong>{" "}
                {booking.paymentMethod}
              </p>

              <h3>
                Total: ₹{booking.totalAmount}
              </h3>

              <span className="booking-status">
                ✅ {booking.bookingStatus}
              </span>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyBookings;