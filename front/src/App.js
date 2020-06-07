import React from 'react';
import Router from './router';
import RootModel from './store/RootModel';
import { onSnapshot } from 'mobx-state-tree';

const rootModel = RootModel.create({ auth: {} });
rootModel.auth.getUserData();

onSnapshot(rootModel, (snapshot) => console.log('snapshot', snapshot));
const App = () => {
  return (
    <>
      <Router rootModel={rootModel} />
    </>
  );
};

export default App;
