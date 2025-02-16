import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebaseConfig"; // Ensure Firebase is configured
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import logo from "./logo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!", {
        position: "top-center",
        autoClose: 3000,
        style: { backgroundColor: "#00FFFF", color: "#001f29", fontWeight: "bold" },
      });
    } catch (error) {
      toast.error("Registration failed! " + error.message, {
        position: "top-center",
        autoClose: 3000,
        style: { backgroundColor: "#FF4C4C", color: "#FFFFFF", fontWeight: "bold" },
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
      <div className="register-logo">
    <img src={logo} alt="Traccar Logo" /><h1>Traccar</h1> {/* NO SPACE HERE */}
</div>
        <div className="register-form">
          <h2>Welcome to <span>Traccar</span></h2>
          <p>Register your account</p>
          <form onSubmit={handleRegister}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            
            <button type="submit" className="register-btn">Create Account</button>
          </form>
          <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
