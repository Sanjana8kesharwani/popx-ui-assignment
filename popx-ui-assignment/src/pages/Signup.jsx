import { useState } from "react";

function Signup() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle submit
  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Account Created Successfully!");
  };

  return (
    <div>
      <h1>Create your PopX account</h1>

      {/* Name input */}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      {/* Submit button */}
      <button className="primary-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;