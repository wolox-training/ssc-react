import { combineReducers as CR } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { wrapCombineReducers } from 'redux-recompose';

import game from './data/reducers';
import login from './login/reducers';

const combineReducers = wrapCombineReducers(CR);

const rootReducers = (history) => combineReducers({
  router: connectRouter(history),
  game,
  login,
  form: formReducer
});

export default rootReducers;
