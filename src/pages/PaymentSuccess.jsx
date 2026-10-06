import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="success-container">
        <h2>Booking information not found.</h2>

        <button
          className="payment-btn"
          onClick={() => navigate("/vehicles")}
        >
          Back to Vehicles
        </button>
      </div>
    );
  }

  return (
    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Payment Successful!</h1>

        <p className="success-message">
          Your vehicle has been booked successfully.
        </p>

        <div className="confirmation-details">

          <p>
            <strong>Vehicle:</strong>{" "}
            {booking.vehicleName}
          </p>

          <p>
            <strong>Booking ID:</strong>{" "}
            {booking.id}
          </p>

          <p>
            <strong>Transaction ID:</strong>{" "}
            {booking.transactionId}
          </p>

          <p>
            <strong>Payment Method:</strong>{" "}
            {booking.paymentMethod}
          </p>

          <p>
            <strong>Payment Status:</strong>{" "}
            <span className="paid">
              {booking.paymentStatus}
            </span>
          </p>

          <p>
            <strong>Booking Status:</strong>{" "}
            <span className="confirmed">
              {booking.bookingStatus}
            </span>
          </p>

          <p>
            <strong>Total Amount:</strong>{" "}
            ₹{booking.totalAmount}
          </p>

        </div>

        <div className="success-buttons">

          <button
            onClick={() => navigate("/vehicles")}
            className="payment-btn"
          >
            Browse More Vehicles
          </button>

          <button
            onClick={() => navigate("/")}
            className="home-btn"
          >
            Go Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default PaymentSuccess;