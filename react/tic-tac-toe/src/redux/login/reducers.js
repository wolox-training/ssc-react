import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  isUserLoggedin: false
};

const initialState = completeState(stateDescription);

const login = {
  primaryActions: [actions.ON_LOGIN],
  override: {
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
  }
};

export default createReducer(initialState, completeReducer(login));
