import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
  }

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <main className="product-page">
        <div className="product-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="product-info">
            <p className="product-category">{product.category}</p>
            <h1>{product.title}</h1>
            <p className="product-rating">★ {product.rating}</p>
            <h2>${product.price}</h2>
            <p className="product-description">{product.description}</p>
            <button 
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    </main>
  );
}

export default Product;