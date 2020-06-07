import { types } from 'mobx-state-tree';

const User = types.model('User', {
  displayName: types.string,
  id: types.string,
  email: types.string,
  picture: types.string,
});

export default User;
