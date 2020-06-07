import './UserDropDownImage.css';
import React from 'react';
import UserIcon from '../../../assets/photos/User.png';
import { DropDownUserInfo } from '../';
import { BlankScreenToggle } from '../../atoms';

const UserDropDownImage = ({
  history,
  authModel,
  changeUserInfoDropDownStatus,
  userInfoDropDownStatus,
}) => {
  return (
    <div className='user'>
      <div className='userComponents' onClick={changeUserInfoDropDownStatus}>
        <img
          alt='userPhoto'
          className='userPhoto'
          src={authModel.user.picture ? authModel.user.picture : UserIcon}
        />
        <div className='arrow-down'></div>
      </div>
      {userInfoDropDownStatus && (
        <>
          <BlankScreenToggle
            changeUserInfoDropDownStatus={changeUserInfoDropDownStatus}
          />
          <DropDownUserInfo history={history} authModel={authModel} />
        </>
      )}
    </div>
  );
};

export default UserDropDownImage;
