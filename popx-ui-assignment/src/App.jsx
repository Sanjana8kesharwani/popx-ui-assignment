import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      {/* Main mobile container */}
      <div className="app-container">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Home />} />

          {/* Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;