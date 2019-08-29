import { createTypes } from 'redux-recompose';

export const actions = createTypes(['SET_AUTH', 'ON_LOGOUT'], '@@LOGIN');

const actionsCreators = {
  setAuth: () => ({
    type: actions.SET_AUTH,
    target: 'isUserLoggedin'
  }),
  logOut: () => ({
    type: actions.ON_LOGOUT,
    target: 'isUserLoggedin'
  })
};

export default actionsCreators;
