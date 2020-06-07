import { types } from 'mobx-state-tree';

import AuthModel from './AuthModel';

const Root = types.model('Root', { auth: AuthModel });

export default Root;
