import React from 'react';

import logo from '../assets/images/logo.png';
import './Header.css';


const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Shree Estate" />
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#"  className='navlink active'>Home</a>
            </li>
            <li>
              <a href="#" className='navlink'>About Us</a>
            </li>
            <li>
              <a href="#" className='navlink'>Contact us</a>
            </li>
            <li>
              <a href="#" className='navlink'>Blogs</a>
            </li>
            <li>
              <a href="#" className='navlink'>Term & Conditions</a>
            </li>
            <li>
              <a href="#" className='navlink'>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;