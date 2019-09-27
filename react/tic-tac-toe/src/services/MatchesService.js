import { wrapService, withPostSuccess } from 'redux-recompose';

import api from '../config/api';
import { actions } from '../redux/login/actions';

const service = {
  getMatches: () => new Promise(resolve => setTimeout(() => api.get('/matches').then(response => resolve(response)), 1000)),
  onLogin: values => api.post('/login', values),
  createMatches: values => api.post('/matches', values)
};

service.onLogin.injections = [
  withPostSuccess((dispatch, response) => {
    localStorage.setItem('token', response.data.token);
    dispatch({
      type: actions.SET_AUTH,
      target: 'isUserLoggedin'
    });
  })
];

export default wrapService(service, 'game', { getMatches: 'data', createMatches: 'createData', onLogin: 'setToken' });
