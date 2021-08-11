import axios from 'axios';

const envUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = `${envUrl}/api`;

//setting up a common request...
const responseBody = (response) => response?.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  get: (url, request) => axios.get(url, request).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Auth = {
    register: (credentials) => requests.post('auth/register', credentials),
    login: (credentials) => requests.post('auth/login', credentials),
}

const Home = {
  products: () => requests.get(`product/home`),
}

export default {
    Auth,
    Home,
}