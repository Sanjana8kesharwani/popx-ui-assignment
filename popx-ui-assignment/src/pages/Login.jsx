import { useState } from "react";

function Login() {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div>
      <h1>Signin to your PopX account</h1>

      {/* Email input */}
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login button */}
      <button className="primary-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;