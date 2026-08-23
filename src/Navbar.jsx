import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { AuthContext } from "./context/AuthContext";
function Navbar() {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">

      <div className="logo">ShopZone</div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        {isLoggedIn ? (
          <button onClick={() => {
            logout();
            setMenuOpen(false);
          }}>
            Logout
          </button>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        )}
      </div>

      <Link to="/cart" className="cart">
        🛒 <span>{cart.length}</span>
      </Link>

    </nav>
  );
}

export default Navbar;