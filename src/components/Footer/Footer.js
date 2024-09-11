import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt='logo' className='logo'></img>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Ac sagittis et in.</p>
          <div className="contact-info">
            <p><i className="fas fa-phone-alt"></i> 8965236547</p>
            <p><i className="fas fa-envelope"></i> support@gmail.com</p>
          </div>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>For Any Query Send Us Mail, We Contact You Soon!</h4>
          <div className="email-box">
            <input type="email" placeholder="Email Address" />
            <button type="submit"><i className="fas fa-arrow-right"></i>Submit</button>
          </div>
          <div className="social-links">
            <h4>Follow Us on</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Shree Estate – All rights reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
