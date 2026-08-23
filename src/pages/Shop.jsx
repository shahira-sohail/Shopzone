import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Shop() {
    const[products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data.products);
          });
    }, []);
    return (
      <main className="page">
        <h1>Shop</h1>
        <div className="product-grid">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <div className="product-image">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>

              <div className="product-info">
                <p className="product-category">
                  {product.category}
                </p>

                <h2>{product.title}</h2>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-bottom">
                  <span className="product-price">
                    ${product.price}
                  </span>

                  <span className="view-product">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
}

export default Shop;