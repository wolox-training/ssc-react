import { createReducer, completeState } from 'redux-recompose';

const stateDescription = {
  data: []
};

const initialState = completeState(stateDescription);

export default createReducer(initialState, {});
