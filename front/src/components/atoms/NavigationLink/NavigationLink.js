import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.css';

const NavigationLink = ({ path, text, userPicture }) => {
  return (
    <Link
      to={path}
      className={
        window.location.pathname === path ? 'activeLink' : 'notActiveLink'
      }>
      {text}{' '}
      {userPicture && (
        <img className='tabletUserPhoto' alt='user' src={userPicture} />
      )}
    </Link>
  );
};

export default NavigationLink;
