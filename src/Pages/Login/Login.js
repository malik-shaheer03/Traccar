import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';
import logo from './logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login Successful!', {
        position: 'top-center',
        autoClose: 3000,
        style: { backgroundColor: '#00FFFF', color: '#001f29', fontWeight: 'bold' },
      });
      setTimeout(() => navigate('/dashboard'), 3000);
    } catch (error) {
      console.error('Login Error:', error.message);
      toast.error('Invalid email or password!', {
        position: 'top-center',
        autoClose: 3000,
        style: { backgroundColor: '#FF4C4C', color: '#FFFFFF', fontWeight: 'bold' },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">
            <img src={logo} alt="Logo" />
            <h1>Traccar</h1>
          </div>
          <div className="login-form">
            <h2>Welcome to <span>Traccar</span></h2>
            <p>Login to your account</p>
            <form onSubmit={handleLogin}>
              <label>Email</label>
              <input type="email" placeholder="sample@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <label>Password</label>
              <div className="password-field">
                <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" onClick={togglePasswordVisibility} className="show-btn">
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <button type="submit" className="login-btn">Login</button>
            </form>

            <Link to="/register" className="create-account">Create account</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
