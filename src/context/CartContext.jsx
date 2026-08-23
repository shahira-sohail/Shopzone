import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  function addToCart(product) {
      setCart((currentCart) => {
        const existingProduct = currentCart.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          return currentCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1, }
              : item
          );
        }

        return [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      });
    }

    function removeFromCart(productId) {
      setCart((currentCart) =>
        currentCart.filter(
          (item) => item.id !== productId
        )
      );
    }

    function updateQuantity(productId, quantity) {
      if (quantity < 1) {
        removeFromCart(productId);
        return;
      }

      setCart((currentCart) =>
        currentCart.map((item) =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}