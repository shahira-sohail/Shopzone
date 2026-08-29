import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h2>
            Shop<span>Zone</span>
          </h2>

          <p>
            A simple place to discover products,
            manage your cart and shop with ease.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-heading">Explore</p>

            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <p className="footer-heading">ShopZone</p>

            <Link to="/cart">Your Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopZone. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;