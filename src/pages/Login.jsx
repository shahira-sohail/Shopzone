import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { isAuthenticated, loginAsGuest, logout } = useAuth();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate("/checkout");
  };

  if (isAuthenticated) {
    return (
      <main className="login-page">
        <section className="login-card">
          <p className="section-label">WELCOME BACK</p>

          <h1>You are logged in.</h1>

          <p>
            You are currently browsing ShopZone as a guest.
          </p>

          <button
            className="login-button"
            onClick={() => navigate("/checkout")}
          >
            Go to checkout
          </button>

          <button
            className="logout-button"
            onClick={logout}
          >
            Logout
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="section-label">SHOPZONE ACCOUNT</p>

        <h1>Welcome back.</h1>

        <p>
          Login as a guest to continue to checkout and complete
          your shopping journey.
        </p>

        <button
          className="login-button"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>
      </section>
    </main>
  );
}

export default Login;