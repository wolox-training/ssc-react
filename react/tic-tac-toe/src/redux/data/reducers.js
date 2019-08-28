import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  data: [],
  isUserLoggedin: false
};

const initialState = completeState(stateDescription);

const game = {
  primaryActions: [actions.GET_DATA, actions.CREATE_DATA, actions.ON_LOGIN]
};

export default createReducer(initialState, completeReducer(game));
