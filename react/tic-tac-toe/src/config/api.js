import { create } from 'apisauce';

const token = localStorage.getItem('token');
const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: { authorization: token }
});

export default api;
