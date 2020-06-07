import React from 'react';
import './DropDownUserInfo.css';
import {
  DropDownLink,
  GoogleLoginButton,
  FacebookLoginButton,
} from '../../atoms';

const DropDownUserInfo = ({ history, authModel }) => {
  const logoutUser = () => {
    authModel.logout();
    localStorage.removeItem('userData');
    document.cookie = '';
    history.push('/login');
  };

  return (
    <div className='wrapper'>
      <div className='triangle-up'></div>
      <>
        {authModel.loggedInStatus ? (
          <div>
            <span className='infoText'>Singed in as </span>
            <strong className='userName'>{authModel.user.displayName}</strong>
            <div className='line' />
            <DropDownLink path='/user' text='Your details' />
            <div className='line' />
            <button onClick={logoutUser} className='logoutButton'>
              Logout
            </button>
          </div>
        ) : (
          <>
            <span className='infoText'>Sign In </span>
            <div className='buttonWrapper'>
              <GoogleLoginButton />
            </div>
            <div className='buttonWrapper'>
              <FacebookLoginButton />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default DropDownUserInfo;
