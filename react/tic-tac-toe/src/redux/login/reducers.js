import { createReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  isUserLoggedin: false
};

const initialState = completeState(stateDescription);

const login = {
  [actions.SET_AUTH]: (state, action) => {
    const hasToken = !!localStorage.getItem('token');
    return {
      ...state,
      [action.target]: hasToken
    };
  },
  [actions.ON_LOGOUT]: (state, action) => {
    localStorage.removeItem('token');
    return {
      ...state,
      [action.target]: false
    };
  }
};

export default createReducer(initialState, login);
