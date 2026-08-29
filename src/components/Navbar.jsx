import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="logo">
          Shop<span>Zone</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/shop">
            Shop
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/checkout">
            Checkout
          </NavLink>

          <NavLink to="/login" className="login-link">
            Login
          </NavLink>

          <NavLink to="/cart" className="cart-link">
            <span className="cart-icon">🛍️</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;