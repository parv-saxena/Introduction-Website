import React from 'react';
import router from '../assets/router.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate= useNavigate();
  return (
    <div className='Navbar'>
      <img src={router} alt="" width="130px" />
      <ul>
      <NavLink to= '/'><li>Home</li> </NavLink>
        <NavLink to= '/Product'> <li>product</li></NavLink>
        <NavLink to= '/contact'> <li>Contact</li></NavLink>

        <NavLink to= '/about'><li>About</li></NavLink>
        <NavLink to= '/jobs'> <li>Jobs</li></NavLink>
      </ul>
      <button onClick={()=>navigate('/about')}>Get Started</button>
    </div>
  );
}

export default Navbar;
