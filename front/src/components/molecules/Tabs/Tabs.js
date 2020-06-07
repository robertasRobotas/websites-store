import React from 'react';
import { NavigationLink } from '../../atoms';
import './Tabs.css';

const NavBarTabs = ({ rootModel, navLinks, menuStatus, history }) => {
  const logoutUser = () => {
    rootModel.auth.logout();
    localStorage.removeItem('userData');
    document.cookie = '';
    history.push('/login');
  };
  return (
    <ul className={menuStatus ? 'open' : 'closed'}>
      <div className='ResponsiveLinks'>
        {navLinks.map((link, i) => (
          <NavigationLink key={i} path={link.path} text={link.text} />
        ))}
        <div className='additionalLinkWrapper'>
          <NavigationLink
            key={'profile'}
            path={'/user'}
            text={'Your details'}
            userPicture={rootModel.auth.user.picture}
          />
        </div>
        <div className='additionalLinkWrapper'>
          <button onClick={logoutUser} className='tabletLogoutButton'>
            Logout
          </button>
        </div>
      </div>
    </ul>
  );
};

export default NavBarTabs;
