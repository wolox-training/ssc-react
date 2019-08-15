import api from '../config/api';

export default {
  getMatches: () => new Promise(resolve => setTimeout(() => api.get('/matches').then(response => resolve(response)), 1000)),
  onLogin: values => api.post('/login', values)
};
