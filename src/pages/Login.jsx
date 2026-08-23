import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { loginAsGuest } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleGuestLogin() {
    loginAsGuest();
    navigate("/checkout");
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>Continue as a guest to checkout.</p>

        <button onClick={handleGuestLogin}>
          Login as Guest
        </button>
      </div>
    </main>
  );
}

export default Login;