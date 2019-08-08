import api from '../config/api';

export default {
  getMatches: () => new Promise((resolve) => api.get('/matches').then(response => resolve(response)))
};
