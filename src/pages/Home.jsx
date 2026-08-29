import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">NEW SEASON · 2026</p>

          <h1>
            Everything you need,
            <br />
            one zone away.
          </h1>

          <p className="hero-description">
            Discover hand-picked products across tech, fashion, beauty and
            home. Find what you need and add it to your cart in seconds.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="primary-button">
              Browse the shop
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact us
            </Link>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-card card-one">
            <span>01</span>
            <strong>Discover</strong>
          </div>

          <div className="decoration-card card-two">
            <span>02</span>
            <strong>Add to cart</strong>
          </div>

          <div className="decoration-card card-three">
            <span>03</span>
            <strong>Checkout</strong>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="section-label">WHY SHOPZONE?</p>
          <h2>Shopping made simple.</h2>
        </div>

        <p>
          Browse products, explore details, manage your cart and complete your
          shopping journey without leaving the app.
        </p>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <span className="feature-number">01</span>
          <h3>Curated products</h3>
          <p>
            Explore a collection of products fetched directly from our product
            API.
          </p>
        </article>

        <article className="feature-card">
          <span className="feature-number">02</span>
          <h3>Easy shopping</h3>
          <p>
            Open any product, check its details and add it to your global cart.
          </p>
        </article>

        <article className="feature-card">
          <span className="feature-number">03</span>
          <h3>One shopping zone</h3>
          <p>
            Your cart stays available while you move between different pages.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;