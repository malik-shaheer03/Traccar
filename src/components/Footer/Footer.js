import React from 'react';
import './Footer.css';
import logo from './traccar-logo.jpg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
 return (
   <footer className="footer">
     <div className="footer-container">
       
       {/* Logo and Brand Section */}
       <div className="footer-section logo">
         <div className="logo-container">
           <img src={logo} alt="Traccar Logo" className="logo-icon" />
           <h2 className="gradient-text">Traccar</h2>
         </div>
         <p>We are more than a digital agency.</p>
       </div>

       {/* Contact Us */}
       <div className="footer-section">
         <h3>Contact Us</h3>
         <p>+44 7380 419432</p>
         <p><a href="mailto:info@traccar.com">info@traccar.com</a></p>
         <p>Office address</p>
         <p>24/7 availability</p>
       </div>

       {/* Our Services */}
       <div className="footer-section">
         <h3>Our Services</h3>
         <p>Navigation</p>
         <p>Geofences</p>
         <p>Monitoring</p>
       </div>

       {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
            <p>
              <Link to="/login" className="link-button" aria-label="Login Page">Login Page</Link>
           </p>
            <p>
              <Link to="/register" className="link-button" aria-label="Register Page">Register Page</Link>
            </p>
        </div>
     </div>

     {/* Footer Bottom Bar */}
     <div className="footer-bottom">
       <p>©{new Date().getFullYear()} Traccar. All Rights Reserved.</p>
       <p>Terms & Conditions</p>

       <div className="social-icons">
          <button aria-label="Facebook" className="icon-button"><FaFacebookF /></button>
          <button aria-label="LinkedIn" className="icon-button"><FaLinkedinIn /></button>
          <button aria-label="Twitter" className="icon-button"><FaTwitter /></button>
          <button aria-label="YouTube" className="icon-button"><FaYoutube /></button>
        </div>
     </div>
   </footer>
 );
};

export default Footer;
