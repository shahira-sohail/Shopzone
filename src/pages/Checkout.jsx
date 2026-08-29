import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { isAuthenticated } = useAuth();
  const { cart, cartTotal } = useCart();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <p className="section-label">SHOPZONE CHECKOUT</p>

        <h1>Ready to place your order?</h1>

        <p>
          Review your order and complete your checkout.
        </p>
      </section>

      <section className="checkout-card">
        <div className="checkout-items">
          <h2>Order summary</h2>

          {cart.length === 0 ? (
            <div className="checkout-empty">
              <p>Your cart is empty.</p>

              <Link to="/shop">
                Browse products →
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    Quantity: {item.quantity}
                  </p>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>
            ))
          )}
        </div>

        <div className="checkout-total">
          <span>Total</span>

          <strong>
            ${cartTotal.toFixed(2)}
          </strong>
        </div>

        <button className="place-order-button">
          Place Order
        </button>
      </section>
    </main>
  );
}

export default Checkout;