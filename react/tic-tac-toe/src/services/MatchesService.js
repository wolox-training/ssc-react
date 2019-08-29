import api from '../config/api';

const service = {
  getMatches: () => new Promise(resolve => setTimeout(() => api.get('/matches').then(response => resolve(response)), 1000)),
  onLogin: values => api.post('/login', values),
  createMatches: values => api.post('/matches', values)
};

export default service;
