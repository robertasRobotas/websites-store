import React from 'react';
import './BlankScreenToggle.css';

const BlankScreenToggle = ({ changeUserInfoDropDownStatus }) => {
  return (
    <>
      <div
        onClick={() => changeUserInfoDropDownStatus()}
        className='blankScreen'></div>
    </>
  );
};

export default BlankScreenToggle;
