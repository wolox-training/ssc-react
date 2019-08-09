import { combineReducers } from 'redux';

import game from './data/reducers';

const rootReducers = combineReducers({
  game
});

export default rootReducers;
