import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export const fetchSessions = () => API.get('/sessions');
export const createSession = (sessionData) => API.post('/sessions', sessionData);
export const deleteSession = (id) => API.delete(`/sessions/${id}`);
export const loginUser = (formData) => API.post('/users/login', formData);
export const registerUser = (formData) => API.post('/users/register', formData);