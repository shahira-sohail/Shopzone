import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="product-page">
        <div className="product-status">
          <p>Loading product...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="product-page">
        <div className="product-status error">
          <p>{error}</p>
          <Link to="/shop">Back to Shop</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="product-page">
      <Link to="/shop" className="back-link">
        ← Back to shop
      </Link>

      <section className="product-detail">

        <div className="product-detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <p className="product-detail-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="product-detail-description">
            {product.description}
          </p>

          <div className="product-detail-price">
            ${product.price}
          </div>

          <div className="product-meta">
            <span>★ {product.rating}</span>
            <span>{product.stock} in stock</span>
          </div>

          <button 
            className="add-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </section>
    </main>
  );
}

export default Product;