import React from 'react';

import './Navbar.css';
import{ GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app_navbar-logoi'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app_navbar-links'>
      <li className='p_opensans'><a href="#home">Home</a></li>

      
      <li className='p_opensans'><a href="#about">About</a></li>
      <li className='p_opensans'><a href="#menu">Menu</a></li>
      <li className='p_opensans'><a href="#awards">Awards</a></li>
      <li className='p_opensans'><a href="#contact">Contact</a></li>
     

    </ul>
  </nav>
);

export default Navbar;
