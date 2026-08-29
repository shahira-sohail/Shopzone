import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="shop-page">
        <div className="shop-status">
          <p>Loading products...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="shop-page">
        <div className="shop-status error">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="shop-page">
      <section className="shop-header">
        <div>
          <p className="section-label">SHOPZONE COLLECTION</p>

          <h1>Find your next favorite.</h1>
        </div>

        <p>
          Browse our collection and select a product to explore its complete
          details.
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <div className="product-image-container">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <p className="product-category">{product.category}</p>

              <h2>{product.title}</h2>

              <div className="product-bottom">
                <span>${product.price}</span>

                <span className="view-product">
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Shop;