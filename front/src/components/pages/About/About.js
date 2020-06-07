import React from 'react';
import Wrapper from '../../_hoc/Wrapper';

const About = ({ history, location, rootModel }) => {
  return (
    <Wrapper history={history} rootModel={rootModel} location={location}>
      <div className='screen'></div>
    </Wrapper>
  );
};

export default About;
