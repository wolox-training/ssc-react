import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import game from './data/reducers';
import login from './login/reducers';

const rootReducers = (history) => combineReducers({
  router: connectRouter(history),
  game,
  login,
  form: formReducer
});

export default rootReducers;
