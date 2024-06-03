import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className='mt-5'>
      <ul className='nav justify-content-center' style={{ opacity: 0.7 }}>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            About Us
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            Services
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            Roadmap
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            FAQ
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            Investment
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            Support
          </Link>
        </li>
        <li className='nav-item mx-md-3'>
          <Link className='nav-link' to='/'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
