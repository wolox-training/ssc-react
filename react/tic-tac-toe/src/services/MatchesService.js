import api from '../config/api';

export default {
  getMatches: () => api.get('/matches').then(response => response)
};
