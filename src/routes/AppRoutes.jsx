
import { Routes, Route } from "react-router-dom";
import AddVehicle from "../pages/AddVehicle";
import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import VehicleDetails from "../pages/VehicleDetails";
import EditVehicle from "../pages/EditVehicle";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/vehicles" element={<Vehicles />} />

      <Route
        path="/vehicles/:id"
        element={<VehicleDetails />}
      />
      <Route path="/vehicles/add" element=
      {<ProtectedRoute>
      <AddVehicle />
      </ProtectedRoute>} 
      />

      <Route
        path="/edit-vehicle/:id"
        element=
      {<ProtectedRoute>
      <EditVehicle />
      </ProtectedRoute>} 
      />

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

      <Route path="/favorites" element={<Favorites />} />





    </Routes>
  );
}

export default AppRoutes;