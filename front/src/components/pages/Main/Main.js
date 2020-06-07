import React from 'react';
import Wrapper from '../../_hoc/Wrapper';
import { observer } from 'mobx-react';
import '../pages.css';

const Main = ({ history, location, rootModel }) => {
  return (
    <>
      <Wrapper history={history} rootModel={rootModel} location={location}>
        <div className='screen'></div>
      </Wrapper>
    </>
  );
};

export default observer(Main);
