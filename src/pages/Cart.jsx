import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, } = useContext(CartContext);

  const total = cart.reduce(
    (sum, product) => {return sum + product.price * product.quantity;},
    0
  );

  return (
    <main className="page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>
                  Subtotal: ${(product.price * product.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                    <button
                    onClick={() =>
                        updateQuantity(
                        product.id,
                            product.quantity - 1
                        )
                    }
                    >
                    −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                    onClick={() =>
                        updateQuantity(
                        product.id,
                        product.quantity + 1
                        )
                    }
                    >
                    +
                    </button>
                </div>

                <button
                    onClick={() => removeFromCart(product.id)}
                >
                    Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </main>
  );
}

export default Cart;