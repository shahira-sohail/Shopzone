import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <section className="empty-cart">
          <p className="section-label">YOUR CART</p>

          <h1>Your cart is empty.</h1>

          <p>
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link to="/shop" className="primary-button">
            Start shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <div>
          <p className="section-label">SHOPZONE CART</p>
          <h1>Your shopping cart.</h1>
        </div>

        <p>
          Review your selected products before continuing to checkout.
        </p>
      </div>

      <section className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="cart-item-info">
                <p>{item.category}</p>

                <h2>{item.title}</h2>

                <span>${item.price}</span>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <strong>{item.quantity}</strong>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <p className="summary-label">ORDER SUMMARY</p>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <Link to="/checkout" className="checkout-button">
            Continue to checkout
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default Cart;