import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../index.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!booking || !booking.vehicle) {
    return (
      <div className="payment-container">
        <div className="payment-card">
          <h2>Booking information not found</h2>

          <button
            className="payment-btn"
            onClick={() => navigate("/vehicles")}
          >
            Back to Vehicles
          </button>
        </div>
      </div>
    );
  }

  const {
    vehicle,
    days,
    pickupLocation,
    pickupDate,
    returnDate,
    rentalAmount,
    securityDeposit,
    totalAmount,
  } = booking;

  const handlePayment = async (e) => {
    e.preventDefault();

    if (paymentMethod === "UPI" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (!cardNumber || !expiry || !cvv)
    ) {
      alert("Please enter all card details.");
      return;
    }

    if (paymentMethod === "Net Banking" && !accountNumber) {
      alert("Please enter your account number.");
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const transactionId = `TXN${Date.now()}`;

      const bookingData = {
        vehicleId: vehicle.id,
        vehicleName: vehicle.name,

        days: Number(days),

        pickupLocation,
        pickupDate,
        returnDate,

        rentalAmount: Number(rentalAmount),
        securityDeposit: Number(securityDeposit),
        totalAmount: Number(totalAmount),

        paymentMethod,
        transactionId,

        paymentStatus: "Paid",
        bookingStatus: "Confirmed",

        createdAt: new Date().toISOString(),
      };

      const response = await api.post("/bookings", bookingData);

      navigate("/payment-success", {
        state: {
          booking: response.data,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-container">

      <h1>💳 Payment</h1>

      <div className="payment-layout">

        {/* =========================
            BOOKING SUMMARY
        ========================= */}
        <div className="payment-summary-card">

          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="payment-vehicle-image"
          />

          <h2>{vehicle.name}</h2>

          <p>
            <strong>Rental Days:</strong> {days}
          </p>

          <p>
            <strong>Pickup Location:</strong>{" "}
            {pickupLocation}
          </p>

          <p>
            <strong>Pickup Date:</strong>{" "}
            {pickupDate}
          </p>

          <p>
            <strong>Return Date:</strong>{" "}
            {returnDate}
          </p>

          <div className="payment-summary">

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
              Total Amount:
              <span> ₹{totalAmount}</span>
            </h3>

          </div>

        </div>


        {/* =========================
            PAYMENT CARD
        ========================= */}
        <div className="payment-card">

          <h2>Select Payment Method</h2>

          <div className="payment-methods">

            <label className="method">
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              📱 UPI
            </label>

            <label className="method">
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              💳 Card
            </label>

            <label className="method">
              <input
                type="radio"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              🏦 Net Banking
            </label>

          </div>


          {/* =========================
              UPI
          ========================= */}
          {paymentMethod === "UPI" && (
            <div className="payment-form">

              <label>UPI ID</label>

              <input
                type="text"
                placeholder="example@upi"
                value={upiId}
                onChange={(e) =>
                  setUpiId(e.target.value)
                }
              />

            </div>
          )}


          {/* =========================
              CARD
          ========================= */}
          {paymentMethod === "Card" && (
            <div className="payment-form">

              <label>Card Number</label>

              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(e.target.value)
                }
              />

              <div className="card-row">

                <div>
                  <label>Expiry Date</label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) =>
                      setExpiry(e.target.value)
                    }
                  />
                </div>

                <div>
                  <label>CVV</label>

                  <input
                    type="password"
                    placeholder="123"
                    maxLength="3"
                    value={cvv}
                    onChange={(e) =>
                      setCvv(e.target.value)
                    }
                  />
                </div>

              </div>

            </div>
          )}


          {/* =========================
              NET BANKING
          ========================= */}
          {paymentMethod === "Net Banking" && (
            <div className="payment-form">

              <label>Account Number</label>

              <input
                type="text"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) =>
                  setAccountNumber(e.target.value)
                }
              />

            </div>
          )}


          {/* =========================
              PAY BUTTON
          ========================= */}
          <button
            className="pay-now-btn"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing
              ? "Processing Payment..."
              : `Pay ₹${totalAmount}`}
          </button>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default Payment;