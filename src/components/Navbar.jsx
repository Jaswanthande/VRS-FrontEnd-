
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  // Get logged-in user safely
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    user = null;
  }

  // Get favorites from Redux
  const favorites = useSelector(
    (state) => state.favorites.favorites || []
  );

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/vehicles">Vehicles</Link>

      <Link to="/favorites">
        Favorites ({favorites.length})
      </Link>

      {!user && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {user && (
        <Link to="/logout">Logout</Link>
      )}


    </nav>
  );
}

export default Navbar;