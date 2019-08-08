import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import data from './data/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(data, composeEnhancers(applyMiddleware(thunk)));
