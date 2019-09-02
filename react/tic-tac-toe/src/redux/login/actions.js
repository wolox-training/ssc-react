import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import dataFetch from '../../services/MatchesService';

export const actions = createTypes(completeTypes(['ON_LOGIN'], ['SET_AUTH', 'ON_LOGOUT']), '@@SOCCER');

const actionsCreators = {
  onLogin: values => ({
    type: actions.ON_LOGIN,
    target: 'setToken',
    service: dataFetch.onLogin,
    payload: values,
    injections: [
      withPostSuccess((dispatch, response) => {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: actions.SET_AUTH,
          target: 'isUserLoggedin'
        });
      })
    ]
  }),
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
