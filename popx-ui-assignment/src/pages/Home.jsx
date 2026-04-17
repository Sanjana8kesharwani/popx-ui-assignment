import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // for navigation

  return (
    <div>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Navigate to signup */}
      <button
        className="primary-btn"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      {/* Navigate to login */}
      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;