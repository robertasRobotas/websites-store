import React from 'react';
import { Link } from 'react-router-dom';
import './DropDownLink.css';

const NavLink = ({ path, text }) => {
  return (
    <Link className='dropDownLink' to={path}>
      {text}
    </Link>
  );
};

export default NavLink;
