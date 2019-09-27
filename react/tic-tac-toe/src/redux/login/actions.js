import { createTypes } from 'redux-recompose';

import { TARGETS } from '../../constants/targets';

export const actions = createTypes(['SET_AUTH', 'ON_LOGOUT'], '@@LOGIN');

const actionsCreators = {
  setAuth: () => ({
    type: actions.SET_AUTH,
    target: TARGETS.isUserLoggedin
  }),
  logOut: () => ({
    type: actions.ON_LOGOUT,
    target: TARGETS.isUserLoggedin
  })
};

export default actionsCreators;
