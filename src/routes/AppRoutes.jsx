import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import VehicleDetails from "../pages/VehicleDetails";

import AddVehicle from "../pages/AddVehicle";
import EditVehicle from "../pages/EditVehicle";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

import Favorites from "../pages/Favorites";

import Booking from "../pages/Booking";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";

import MyBookings from "../pages/MyBookings";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          HOME
      ========================= */}
      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          VEHICLES
      ========================= */}
      <Route
        path="/vehicles"
        element={<Vehicles />}
      />

      <Route
        path="/vehicles/:id"
        element={<VehicleDetails />}
      />


      {/* =========================
          ADD VEHICLE
          PROTECTED
      ========================= */}
      <Route
        path="/vehicles/add"
        element={
          <ProtectedRoute>
            <AddVehicle />
          </ProtectedRoute>
        }
      />


      {/* =========================
          EDIT VEHICLE
          PROTECTED
      ========================= */}
      <Route
        path="/edit-vehicle/:id"
        element={
          <ProtectedRoute>
            <EditVehicle />
          </ProtectedRoute>
        }
      />


      {/* =========================
          AUTHENTICATION
      ========================= */}
      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />


      {/* =========================
          FAVORITES
      ========================= */}
      <Route
        path="/favorites"
        element={<Favorites />}
      />


      {/* =========================
          BOOKING
      ========================= */}
      <Route
        path="/booking"
        element={<Booking />}
      />


      {/* =========================
          PAYMENT
      ========================= */}
      <Route
        path="/payment"
        element={<Payment />}
      />


      {/* =========================
          PAYMENT SUCCESS
      ========================= */}
      <Route
        path="/payment-success"
        element={<PaymentSuccess />}
      />


      {/* =========================
          MY BOOKINGS
      ========================= */}
      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

    </Routes>
  );
}

export default AppRoutes;